const path = require('path');
const fetch = require('electron-fetch').default;
const { app, ipcMain, Menu } = require('electron');
const {exec} = require('child_process');
const configGenerator = require('./configGenerator');

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

ipcMain.on('brokers:input', (_, brokerCount) => {
  // if (brokerCount === 1 ) {
  //   // execute docker config file with one broker
  //   // configGenerator(1);
  // }
  // else {
  configGenerator(brokerCount);
  dockerExec();
    // execute docker config file
  });
// });

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


// exec('docker exec -it kafka101 ./kafka-monitoring-stack-docker-compose/zk-kafka-single-node-stack.yml /bin/bash', (err, stdout, stderr) => {
//   if(err) {
//     console.log(err);
//   }
//   if(stderr) {
//     console.log(stderr);
//   }
//   console.log(stdout);
// });
// exec('ls -la', (err, stdout, stderr) => {
//   if(err) {
//     console.log(err);
//   }
//   if(stderr) {
//     console.log(stderr);
//   }
//   console.log(stdout);
// });

function dockerExec() {

    // exec('docker-compose -f  ./configs/docker_multiple_nodes.yml up -d', (err, stdout, stderr) => {
    exec('docker-compose -f  ./configs/zk-kafka-multiple-nodes-stack.yml up -d', (err, stdout, stderr) => {
    if(err) {
      console.log(err);
    }
    if(stderr) {
      console.log(stderr);
    }
    console.log(stdout);
    });
}