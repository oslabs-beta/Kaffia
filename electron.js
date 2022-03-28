const path = require('path');
const fetch = require('electron-fetch').default;
const { app, ipcMain, Menu } = require('electron');

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

  // creates popup window that is opened / closed when user clicks on taskbar icon
  popupWindow = new PopupWindow(`file://${__dirname}/src/popup.html`);
  const iconName =
    process.platform === 'darwin' ? 'icon-mac.png' : 'icon-windows.png';
  const iconPath = path.join(__dirname, `/src/assets/${iconName}`);
  tray = new MetricTray(iconPath, popupWindow);
});

ipcMain.on('brokers:input', (_, brokers) => {});

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

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  menuTemplate.push({
    label: 'Developer',
    submenu: [{ role: 'reload' }, { role: 'toggleDevTools' }],
  });
}
