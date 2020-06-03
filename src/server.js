
var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname + '/static/vanila.js'));
app.use(express.static(__dirname + '/static/vanila.js'));


app.get('./static/vanila.js', function (req, res) {
    res.sendfile(__dirname + '/static/vanila.js');
});




// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(9000);