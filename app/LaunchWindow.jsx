const electron = require('electron');

const { BrowserWindow, app } = electron;

class LaunchWindow extends BrowserWindow {
  constructor(url) {
    super({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        backgroundThrottling: false,
      },
      height: 700,
      width: 500,
      frame: true,
      autoHideMenuBar: false,
      resizable: process.env.NODE_ENV === 'development',
      show: true,
    });
    this.on('closed', () => app.quit());
    this.loadURL(url);
  }
}

module.exports = LaunchWindow;
