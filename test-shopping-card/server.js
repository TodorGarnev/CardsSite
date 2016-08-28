var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

// Routes
app.use('/', require('./routes/api'));

app.listen(8000);
