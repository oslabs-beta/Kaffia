const electron = require('electron');
const { BrowserWindow } = electron;

class PopupWindow extends BrowserWindow {
  constructor(url) {
    super({
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        backgroundThrottling: false,
      },
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
    });
    this.on('blur', () => {
      this.hide.bind(this);
    });
    this.loadURL(url);
  }
}

module.exports = PopupWindow;
