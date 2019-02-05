// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron');
const express = require('express');
const server = express();
const WebSocketServer = require('ws').Server;


let wss;
let connectionCount = 0;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

class Clients {
    constructor(){
        this.clientList = {};
        this.saveClient = this.saveClient.bind(this);
    }
    saveClient(username, client) {
        this.clientList[username]= client;
    }
}

const clients = new Clients();
function createWindow () {
    // Initialize Express Server & web socket
    initWebsocket();
    initServer();

  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

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
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
});


function initWebsocket(){
    wss = new WebSocketServer({port: 40510});
    wss.on('connection', function (ws) {
        connectionCount ++;
        console.log('New Connection! count: ' + connectionCount);
        mainWindow.webContents.send('connectionCount', connectionCount);

        startWebsocketHeartbeat(ws);

        //Received Messages
        ws.on('message', function (message) {
            console.log('received: %s', message);
            const parsedMsg = JSON.parse(message);
            if(parsedMsg.type === 'userRegister'){
                clients.saveClient(parsedMsg.username, ws);
            }
        });



        ws.on('close', function close() {
            console.log('disconnected');
            mainWindow.webContents.send('connectionCount', connectionCount);

            connectionCount --;
            if (connectionCount < 0){
                console.log("we have negative connections.... this is weird...");
                connectionCount = 0;
            }
        });

    });



}

function initServer() {
  //  server.get('/', (req, res) => res.send('connected to server!'));
    server.get('/', function (req, res) {
        res.sendfile('./ng-client/dist/ng-client/index.html');
    });

    server.use(express.static('./ng-client/dist/ng-client/'));
    server.listen(2727, () => console.log('Example app listening on port 2727!'));

}

function startWebsocketHeartbeat(ws) {
    setInterval(
        /*todo - this should be set up as an observer model, and the websocket heartbeat and the electron renderer
         should subscribe to the periodically emitted event.
          */
        () => {
            try {
                ws.send('' + new Date());
            }
            catch (e) {
                console.log('unable to send message... here is the error:' );
                console.log(e);
            }
        }, 1000);
}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
