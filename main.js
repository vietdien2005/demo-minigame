const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow(
  {
    width: 1200, 
    height: 700,
    title: "Mobile Day 2016",
    minWidth: 1200,
    minHeight: 700,
    icon: 'images/mobileday-icon.icns',
    x: undefined,
    y: undefined,
    useContentSize: false,
    center: true,
    resizable: true,
    alwaysOnTop: false,
    fullscreen: false,
    skipTaskbar: false,
    kiosk: false,
    show: true,
    frame: true,
    acceptFirstMouse: false,
    disableAutoHideCursor: true,
    autoHideMenuBar: true,
    enableLargerThanScreen: false,
    backgroundColor: '#FFF',
    darkTheme: true,
    transparent: false,
    type: undefined,
    titleBarStyle: undefined,
    webPreferences: {
      nodeIntegration: true,
      preload: undefined,
      partition: undefined,
      zoomFactor: 1.0,
      javascript: true,
      webSecurity: true,
      allowDisplayingInsecureContent: false,
      allowRunningInsecureContent: true,
      images: true,
      java: false,
      textAreasAreResizable: true,
      webgl: true,
      webaudio: true,
      plugins: false,
      experimentalFeatures: false,
      experimentalCanvasFeatures: false,
      overlayScrollbars: false,
      overlayFullscreenVideo: false,
      sharedWorker: false,
      directWrite: true,
      pageVisibility: false
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
