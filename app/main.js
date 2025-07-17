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