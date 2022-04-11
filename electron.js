const path = require('path');
const { app, ipcMain, Menu } = require('electron');
const { exec } = require('child_process');
const configGenerator = require('./configs/configGenerator.js');

const LaunchWindow = require('./app/LaunchWindow.jsx');
const MainWindow = require('./app/MainWindow.jsx');
const PopupWindow = require('./app/PopupWindow.jsx');
const MetricTray = require('./app/MetricTray.jsx');

let mainWindow;
let launchWindow;
let tray;
let popupWindow;
let preferences;

app.on('ready', () => {
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);

  launchWindow = new LaunchWindow(`file://${__dirname}/src/launch.html`);
  launchWindow.on('show', () => {
    setTimeout(() => {
      launchWindow.focus();
    }, 500);
  });
  launchWindow.show();
});

// build app menu
const menuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        role: 'quit',
      },
    ],
  },
];

if (process.platform === 'darwin') {
  menuTemplate.unshift({
    label: '',
  });
}

if (process.env.NODE_ENV === 'development') {
  menuTemplate.push({
    label: 'Developer',
    submenu: [{ role: 'reload' }, { role: 'toggleDevTools' }],
  });
}

function enterApp() {
  // close launch window and show main window
  launchWindow.hide();
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
  mainWindow.show();
}

ipcMain.on('preferences:submit', (_, userPreferences) => {
  // generate Prometheus, Docker, Grafana, etc. config files based on user input
  preferences = userPreferences;
  const { brokers, metrics } = userPreferences;
  configGenerator(brokers, metrics);
  if (brokers === 1) {
    dockerExec(
      './configs/docker/docker_single_node.yml up -d --remove-orphans'
    );
  } else
    dockerExec(
      './configs/docker/docker_multiple_nodes.yml up -d --remove-orphans'
    );

  function checkForCluster() {
    exec('docker logs grafana', (err, stdout, stderr) => {
      if (!stderr.includes('Error: No such container: grafana')) {
        enterApp();
      } else {
        setTimeout(checkForCluster, 1000);
      }
    });
  }

  checkForCluster();

  // // create popup window that is opened / closed when user clicks on taskbar icon
  // popupWindow = new PopupWindow(`file://${__dirname}/src/popup.html`);
  // const iconName =
  //   process.platform === 'darwin' ? 'icon-mac.png' : 'icon-windows.png';
  // const iconPath = path.join(__dirname, `/src/assets/${iconName}`);
  // tray = new MetricTray(iconPath, popupWindow);
});

ipcMain.on('app:rendered', () => {
  mainWindow.webContents.send('preferences:send', preferences);
});

ipcMain.on('app:quit', () => {
  app.quit();
});

ipcMain.on('cluster:shutdown', () => {
  if (preferences.brokers === 1) {
    dockerExec('./configs/docker/docker_single_node.yml down');
  } else dockerExec('./configs/docker/docker_multiple_nodes.yml down');
  mainWindow.hide();
  launchWindow = new LaunchWindow(`file://${__dirname}/src/launch.html`);
});

function dockerExec(path) {
  const dockerCommand = 'docker-compose -p kaffia-cluster -f ' + path;

  exec(dockerCommand, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }
    if (stderr) {
      console.log(stderr);
    }
    if (stdout.includes('Created')) {
      console.log('hello');
    }
    // console.log(stdout);
  });
}
