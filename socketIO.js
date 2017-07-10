var express = require('express');
var app = express();

module.exports = function (app) {

  console.log("Socket Linked");

  var app = require('express')();
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
  var port = process.env.PORT || 3000;


  console.log("io", io);

  app.get('/', function(req, res){
    res.sendFile(__dirname + './public/socketTest.html');
  });

  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
};

