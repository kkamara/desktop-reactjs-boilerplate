const { 
  win, 
  BrowserWindow, 
  app,
} = require('electron')
const { join, } = require('node:path')


function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
    },
  })

  win.loadFile(
    join(
      __dirname, 
      '/', 
      '../', 
      'index.html',
    )
  )
}

app.whenReady().then(createWindow)