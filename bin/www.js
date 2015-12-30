//var debug = require('debug')('my-app');
var app = require('../app');
var server = require('http').createServer(app);

app.set('hostname', process.env.HOSTNAME || '127.0.0.1');
app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), app.get('hostname'), function(){
    console.log('Listening on '.concat(server.address().address.concat(':'.concat(server.address().port))))
});

module.exports = server;