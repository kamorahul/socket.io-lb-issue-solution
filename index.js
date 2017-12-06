var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3001;

const redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379 }));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg+"3001");
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
