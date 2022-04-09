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
      height: 800,
      minHeight: 500,
      width: 1100,
      minWidth: 800,
      frame: true,
      autoHideMenuBar: false,
      resizable: true,
      show: true,
    });
    this.on('closed', () => app.quit());
    this.loadURL(url);
  }
}

module.exports = MainWindow;
