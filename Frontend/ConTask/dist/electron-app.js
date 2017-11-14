"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var electron_connect_1 = require("electron-connect");
var applicationRef = null;
var debugMode = false;
var mainWindowSettings = {
    width: 800,
    height: 550,
    frame: true,
    resizable: false
};
function initMainListener() {
    electron_1.ipcMain.on('ELECTRON_BRIDGE_HOST', function (event, msg) {
        console.log('msg received', msg);
        if (msg === 'ping') {
            event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
        }
    });
}
function createWindow() {
    applicationRef = new electron_1.BrowserWindow(mainWindowSettings);
    applicationRef.loadURL("file:///" + __dirname + "/index.html");
    if (debugMode) {
        // Open the DevTools.
        applicationRef.webContents.openDevTools();
    }
    applicationRef.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        applicationRef = null;
    });
    initMainListener();
    electron_connect_1.client.create(applicationRef);
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        // TODO perhaps hook this and wait for message bus before quitting?
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (applicationRef === null) {
        createWindow();
    }
});
