var Server = require('ws').Server;

var server = new Server({port: 8081});

var messageHandler = function(socket) {
  return function(message) {
    socket.send(message);
  }
}

var handleSocket = function(socket) {
  socket.send(':)');
  socket.on('message', messageHandler(socket));
}

server.on('connection', handleSocket);
