const {app, BrowserWindow, Menu} = require('electron')

// const debug = require('electron-debug');
// debug();

let mainWindow;


function createWindow () {
	mainWindow = new BrowserWindow({
		width: 972,
		height: 585,
		center: true,
		maxWidth: 972,
		minWidth: 972,
		maxHeight: haut,
		minHeight: haut,
		icon: __dirname + icon,
		useContentSize: true,
		transparent: true,
		webPreferences: {
			nodeIntegration: true
		}
	})
  	mainWindow.loadURL('http://localhost:1903/login.html');

  	mainWindow.on('closed', function () {
		mainWindow = null
	})
}

if (process.platform.toLowerCase()  == 'win32'){
	haut  = 605
	icon = `/src/foyer.ico`
}
else{
	haut = 585
	icon = `/src/foyer.png`
}


app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
if (mainWindow === null) createWindow()
})

 

//Menu.setApplicationMenu(menu);
