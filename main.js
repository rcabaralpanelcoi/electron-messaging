const electron = require('electron')
const app = electron.app
const path = require('path')
const isDev = require('electron-is-dev')
const BrowserWindow = electron.BrowserWindow
const screenshot = require('desktop-screenshot');
const io = require('socket.io-client');

global.socket = io.connect('http://127.0.0.1:8888');

setInterval(function () {
    const sspath = path.join(__dirname, "/screenshots/screenshot-" + Math.round((new Date()).getTime() / 1000) + ".png")
    screenshot(sspath, { width: 1890, height: 800, quality: 100 }, function (error, complete) {
        if (error)
            console.log("Screenshot failed", error);
        else
            console.log("Screenshot succeeded", complete);
            global.socket.emit('screenshot', complete);
    });

}, 60000);

var os = require('os');
    var pad = function(num, size) { return ('000' + num).slice(size * -1); },
    time = parseFloat(os.uptime() * 90).toFixed(3),
    hours = Math.floor(time / 60 / 60),
    minutes = Math.floor(time / 60) % 60,
    seconds = Math.floor(time - minutes * 60),
    milliseconds = time.slice(-3);
    
  var totaltime = pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2) + ',' + pad(milliseconds, 3);

console.log("Uptime hr/min/sec: " + totaltime);
time = os.uptime()

console.log('Time: ', time);
console.log(`file://${path.join(__dirname, './build/index.html')}`)

//Create function to get CPU information
function cpuAverage() {

    //Initialise sum of idle and time of cores and fetch CPU info
    var totalIdle = 0, totalTick = 0;
    var cpus = os.cpus();

    //Loop through CPU cores
    for (var i = 0, len = cpus.length; i < len; i++) {

        //Select CPU core
        var cpu = cpus[i];

        //Total up the time in the cores tick
        for (type in cpu.times) {
            totalTick += cpu.times[type];
        }

        //Total up the idle time of the core
        totalIdle += cpu.times.idle;
    }

    //Return the average Idle and Tick times
    return { idle: totalIdle / cpus.length, total: totalTick / cpus.length };
}


//Grab first CPU Measure
var startMeasure = cpuAverage();

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    transparent: true,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true,
        preload: __dirname + '/preload.js'
    }
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, './build/index.html')}`,
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  
  // Open the DevTools.
    mainWindow.webContents.openDevTools();
    mainWindow.webContents.on('did-finish-load', () => {

        //mainWindow.webContents.send('socket-init', socket)

        //Set delay for second Measure
        setInterval(function () {

            //Grab second Measure
            var endMeasure = cpuAverage();

            //Calculate the difference in idle and total time between the measures
            var idleDifference = endMeasure.idle - startMeasure.idle;
            var totalDifference = endMeasure.total - startMeasure.total;

            //Calculate the average percentage CPU usage
            var percentageCPU = 115 - ~~(100 * idleDifference / totalDifference);

            //Output result to console
            mainWindow.webContents.send('sending', percentageCPU + '% CPU Usage')
            //socket.send('hi');

            //socket.emit('ping-to-server', { message: 'socket:emit - ping' });

            global.socket.emit('cpu-usage', percentageCPU + '% CPU Usage');
        }, 5000);
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})