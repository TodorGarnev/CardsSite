var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

app.use(express.static(__dirname + '/'));

// Routes
app.use('/', require('./routes/api'));

app.listen(8000);
