window.ipcRenderer = require('electron').ipcRenderer;
const socket = require('electron').remote;
window.socket = socket.getGlobal('socket');