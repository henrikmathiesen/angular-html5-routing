var http = require('http');
var express = require('express'); 
var app = express();

//
// Set access to static files; virtual path and actual path
app.use('/',  express.static(__dirname + '/app/js/bld'));
app.use('/',  express.static(__dirname + '/app/sass/bld'));
app.use('/',  express.static(__dirname + '/app/views'));

//
// Serve the index.html for all routes (front end routing will take it from there)
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
 
app.listen(1338);