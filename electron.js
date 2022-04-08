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

ipcMain.on('preferences:submit', (_, userPreferences) => {
  // generate Prometheus, Docker, Grafana, etc. config files based on user input
  const { brokers, metrics } = userPreferences;
  configGenerator(brokers, metrics);
  if (brokers === 1) {
    dockerExec('./configs/docker/docker_single_node.yml');
  } else dockerExec('./configs/docker/docker_multiple_nodes.yml');

  // close launch window and show main window
  launchWindow.close();
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
  mainWindow.on('show', () => {
    setTimeout(() => {
      mainWindow.focus();
    }, 500);
  });

  // create popup window that is opened / closed when user clicks on taskbar icon
  popupWindow = new PopupWindow(`file://${__dirname}/src/popup.html`);
  const iconName =
    process.platform === 'darwin' ? 'icon-mac.png' : 'icon-windows.png';
  const iconPath = path.join(__dirname, `/src/assets/${iconName}`);
  tray = new MetricTray(iconPath, popupWindow);
});

function dockerExec(path) {
  const dockerCommand =
    'docker-compose -p kaffia-cluster -f ' + path + ' up -d';

  exec(dockerCommand, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }
    if (stderr) {
      console.log(stderr);
    }
    console.log(stdout);
  });
}
