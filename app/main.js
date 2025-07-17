const {app, BrowserWindow} = require('electron/main')
const path = require('node:path')


const createWindow = () => {
    const preloadPath = path.join(__dirname, 'preload.js')
    console.log('preloadPath: ' + preloadPath);
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: preloadPath
        }
    })
    win.loadFile('app/index.html')
}


app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// // when app is ready, print message to console. This the local terminal, not the webbrowser!
// // Electron apps run locally and do not need a webbrowser.
// app.on('ready', () => {
//     console.log(__dirname);
//     main_window = new BrowserWindow({
//         webPreferences: {
//             contextIsolation: true,
//             nodeIntegration: false,
//             preload: path.join(__dirname, 'preload.js')
//         }
//     });
//     main_window.loadFile(path.join(__dirname, 'index.html'));
// });