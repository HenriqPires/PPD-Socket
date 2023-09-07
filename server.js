
var express = require('express');
var app = express();
var http = require('http').createServer(app).listen(4555);
var io = require('socket.io').listen(http);
var bodyParser = require('body-parser');
var router = require('./routes'); 
var emitir = require('./middleware')(io); 


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 

app.use(emitir); 
app.use('/api', router); 


app.listen(port, function () {
    console.log('Conectado à porta ' + port);
});
