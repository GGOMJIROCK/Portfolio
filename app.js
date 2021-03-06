var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.use(express.static(__dirname+"/public"));
app.use(express.static(__dirname+"/app"));
app.get('/', function (req, res) {
    console.log('Some user connected.');
    res.sendFile(__dirname + '/app/index.html');
});
var server = app.listen(8080, function () {
    console.log('Executed Server!!');
});

var api = require('./app/js/router');
app.use('/', api);