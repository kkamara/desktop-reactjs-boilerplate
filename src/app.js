const { 
  BrowserWindow, 
  app,
  ipcMain,
  Notification,
} = require('electron')
const { join, } = require('node:path')

const inProduction = app.isPackaged

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#fff',
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
      preload: join(
        __dirname, 
        '../', 
        'preload.js',
      ),
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

if (!inProduction) {
  require('electron-reload')(__dirname, {
    electron: join(
      __dirname, 
      '../',
      'node_modules', 
      '.bin', 
      'electron',
    ),
  })
}

ipcMain.on('notify', (event, message) => {
  new Notification({ title: 'Notification', body: message, }).show()
})

app.whenReady().then(createWindow)