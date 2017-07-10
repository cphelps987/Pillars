var express = require('express');

module.exports = function (app) {

  var app = require('express')();
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
  var port = process.env.PORT || 8080;

  app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/socketTest.html');
  });

  io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });

}
