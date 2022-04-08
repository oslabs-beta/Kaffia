const electron = require('electron');

const { BrowserWindow, app } = electron;

class MainWindow extends BrowserWindow {
  constructor(url) {
    super({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        backgroundThrottling: false,
      },
      height: 300,
      width: 500,
      frame: true,
      autoHideMenuBar: false,
      resizable: false,
      show: true,
    });
    this.on('closed', () => app.quit());
    this.loadURL(url);
  }
}

module.exports = MainWindow;
