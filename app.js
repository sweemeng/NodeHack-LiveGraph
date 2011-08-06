
/**
 * Module dependencies.
 */

var express = require('express');
var ejs     = require('ejs');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
    app.register('.html',require('ejs'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Routes

app.get('/', function(req, res){
  res.render('index', {
    title: 'hello'
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
