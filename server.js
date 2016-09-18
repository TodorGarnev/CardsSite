var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + '/'));
app.use('/', require('./routes/api'));

app.listen(8000);
