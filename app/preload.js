const { contextBridge } = require('electron')


contextBridge.exposeInMainWorld('electronAPI', {
    getCurrentDirectory: () => __dirname
});