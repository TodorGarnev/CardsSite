var express = require('express');
var bodyParser  = require('body-parser');
var app = express();



app.use(express.static(__dirname + '/'));


// Routes
app.use('/', require('./routes/api'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




app.listen(8000);
