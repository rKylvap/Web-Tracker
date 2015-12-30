var express = require('express');
var router = express.Router();
var morgan = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');

var index = require('./routes/index')(router);

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/public'));
app.use('/js',  express.static(__dirname + '/js'));
app.use('/views',  express.static(__dirname + '/views'));
app.use('/bootstrap',  express.static(__dirname + '/bower_components/bootstrap'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(favicon(__dirname + '/public/favicon.ico'));

app.use('/', index);

app.all('/*', function(req, res, next){
    res.sendFile('/views/layout.html', { root: __dirname });
});

module.exports = app;