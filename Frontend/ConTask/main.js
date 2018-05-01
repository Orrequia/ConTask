const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

const log = require('electron-log');
const { autoUpdater } = require("electron-updater");
log.info('App starting...');


autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function sendStatusToWindow(text) {
    log.info(text);
    mainWindow.webContents.send('message', text);
}

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1400,
        height: 1000,
        minWidth: 300,
        minHeight: 400,
        //frame: true,
        resizable: true,
        backgroundColor: '#ffffff'
        });

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools.
    win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    })
}


autoUpdater.on('checking-for-update', () => {
    sendStatusToWindow('Checking for update...');
});
autoUpdater.on('update-available', (ev, info) => {
    sendStatusToWindow('Update available.');
});
autoUpdater.on('update-not-available', (ev, info) => {
    sendStatusToWindow('Update not available.');
});
autoUpdater.on('error', (ev, err) => {
    sendStatusToWindow('Error in auto-updater.');
});
autoUpdater.on('download-progress', (ev, progressObj) => {
    sendStatusToWindow('Download progress...');
});


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});

autoUpdater.on('update-downloaded', (ev, info) => {
    // Wait 5 seconds, then quit and install
    // In your application, you don't need to wait 5 seconds.
    // You could call autoUpdater.quitAndInstall(); immediately
    sendStatusToWindow('Update downloaded; will install in 5 seconds');
    mainWindow.setClosable(true);
    setTimeout(function () {
        autoUpdater.quitAndInstall();
    }, 5000)
})


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.