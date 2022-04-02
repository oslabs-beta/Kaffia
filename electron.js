const path = require('path');
const { app, ipcMain, Menu } = require('electron');
const { exec } = require('child_process');
const configGenerator = require('./configs/configGenerator.js');

const MainWindow = require('./app/MainWindow.jsx');
const PopupWindow = require('./app/PopupWindow.jsx');
const MetricTray = require('./app/MetricTray.jsx');

let mainWindow;
let tray;

app.on('ready', () => {
  // creates main electron window using menu from template below
  mainWindow = new MainWindow(`file://${__dirname}/src/index.html`);
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
  mainWindow.on('show', () => {
    setTimeout(() => {
      mainWindow.focus();
    }, 200);
  });
  mainWindow.show();

  // creates popup window that is opened / closed when user clicks on taskbar icon
  popupWindow = new PopupWindow(`file://${__dirname}/src/popup.html`);
  const iconName =
    process.platform === 'darwin' ? 'icon-mac.png' : 'icon-windows.png';
  const iconPath = path.join(__dirname, `/src/assets/${iconName}`);
  tray = new MetricTray(iconPath, popupWindow);
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

ipcMain.on('brokers:input', (_, brokerCount) => {
  if (brokerCount === 1) {
    return dockerExec('./configs/docker/docker_single_node.yml');
  }
  configGenerator(brokerCount);
  return dockerExec('./configs/docker/docker_multiple_nodes.yml');
});

function dockerExec(path) {
  const dockerCommand = 'docker-compose -f ' + path + ' up -d';

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
