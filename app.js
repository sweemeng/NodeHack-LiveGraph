
/**
 * Module dependencies.
 */

var express = require('express'),
    app = express.createServer(),
    io      = require('socket.io').listen(app),
    ejs     = require('ejs');


// Configuration

app.configure(function(){
  app.register('.html',require('ejs'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

//numbers


function numb3r(){
   this.x = Math.round(Math.random()*100);
   this.y = Math.round(Math.random()*100);
}

// the socket part

io.of('/data').on('connection',function(socket){
  setInterval(function() {      
     socket.emit('hello', new numb3r());
  }, 1000);
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'hello'
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
