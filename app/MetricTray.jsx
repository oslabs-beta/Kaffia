const electron = require('electron');
const { Tray, Menu } = electron;

class MetricTray extends Tray {
  constructor(iconPath, popupWindow) {
    super(iconPath);
    this.popupWindow = popupWindow;
    this.on('click', this.onClick);
    this.on('right-click', this.onRightClick);
    this.setToolTip('Kaffia');
  }

  onClick = (event, bounds) => {
    const { x, y } = bounds;
    const { height, width } = this.popupWindow.getBounds();

    if (this.popupWindow.isVisible()) {
      this.popupWindow.hide();
    } else {
      this.popupWindow.setBounds({
        x: x - width / 2,
        y: process.platform === 'darwin' ? y : y - height,
        height,
        width,
      });
      this.popupWindow.show();
    }
  };

  onRightClick = (event) => {
    const menuConfig = Menu.buildFromTemplate([{ role: 'quit' }]);
    this.popUpContextMenu(menuConfig);
  };
}

module.exports = MetricTray;
