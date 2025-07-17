const {app, BrowserWindow} = require('electron')


let main_window = null;


// when app is ready, print message to console. This the local terminal, not the webbrowser!
// Electron apps run locally and do not need a webbrowser.
app.on('ready', () => {
    console.log('Hello from Electron!');
    main_window = new BrowserWindow(); // Don't forget "new"!
});