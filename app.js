
/**
 * Module dependencies.
 */

var express = require('express'),
    app     = express.createServer(),
    io      = require('socket.io').listen(app),
    ejs     = require('ejs'),
    os      = require('os');

var prev = 0
var curr = 0
// Configuration

app.configure(function(){
    app.register('.html',require('ejs'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.use(app.router);
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
});

io.configure(function() {
    io.set('log level', 1);
});

io.of('/data').on('connection',function(socket){
    socket.emit('hello',{ data: 'hello'});
    socket.on('received',function(data){
        var value = os.loadavg()[0];
        socket.emit('send',{ data: value});
       
    });
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'hello'
  });
});


app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
