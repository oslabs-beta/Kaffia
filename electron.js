const { app, ipcMain, Menu, shell } = require('electron');
const { exec } = require('child_process');
const configGenerator = require('./configs/configGenerator.js');

const LaunchWindow = require('./app/LaunchWindow.jsx');
const MainWindow = require('./app/MainWindow.jsx');

let mainWindow;
let launchWindow;
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

// handle specific menu issue for Macs
if (process.platform === 'darwin') {
  menuTemplate.unshift({
    label: '',
  });
}

// add dev tools to menu if in development mode
if (process.env.NODE_ENV === 'development') {
  menuTemplate.push({
    label: 'Developer',
    submenu: [{ role: 'reload' }, { role: 'toggleDevTools' }],
  });
}

// enter the main app once the Docker container has launched
function enterApp() {
  // close launch window and show main window
  launchWindow.hide();
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
  mainWindow.show();
}

ipcMain.on('preferences:submit', (_, userPreferences) => {
  // generate Prometheus, Docker, Grafana, etc. config files based on user input
  preferences = userPreferences;
  const { brokers, metrics, email } = userPreferences;
  configGenerator(brokers, metrics, email);
  if (brokers === 1) {
    dockerExec(
      './configs/docker/docker_single_node.yml up -d --remove-orphans'
    );
  } else
    dockerExec(
      './configs/docker/docker_multiple_nodes.yml up -d --remove-orphans'
    );

  // continue to check for a running cluster every second before launching the main app
  function checkForCluster() {
    exec('docker logs grafana', (err, stdout, stderr) => {
      if (stderr.includes('Cannot connect to the Docker daemon')) {
        return launchWindow.webContents.send('docker:closed');
      }
      if (!stderr.includes('Error: No such container: grafana')) {
        return enterApp();
      }
      setTimeout(checkForCluster, 1000);
    });
  }
  checkForCluster();
});

// send preferences to React side when page is rendered
ipcMain.on('app:rendered', () => {
  mainWindow.webContents.send('preferences:send', preferences);
});

ipcMain.on('app:quit', () => {
  app.quit();
});

// run command to shut down cluster when user presses shutdown button
ipcMain.on('cluster:shutdown', () => {
  if (preferences.brokers === 1) {
    dockerExec('./configs/docker/docker_single_node.yml down');
  } else dockerExec('./configs/docker/docker_multiple_nodes.yml down');
  mainWindow.hide();
  launchWindow = new LaunchWindow(`file://${__dirname}/src/launch.html`);
});

// execute command to start up or shut down Docker app
function dockerExec(path) {
  const dockerCommand = 'docker-compose -p kaffia-cluster -f ' + path;
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

// open GitHub in external browser when user clicks link on Home page
ipcMain.on('github:launch', () => {
  shell.openExternal('https://github.com/oslabs-beta/Kaffia');
});
