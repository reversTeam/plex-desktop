var App = require('./src/kernel/App.js');
var Server = require('./src/kernel/Server.js');

var plex_app = new App('Plex');
var server = new Server(plex_app, 'localhost', 4242);

server.start();
