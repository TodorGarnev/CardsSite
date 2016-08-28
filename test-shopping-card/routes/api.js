// Dependencies
var express = require('express');
var router = express.Router();
var mysql = require("mysql");


router.get('/', function(req, res){
	res.redirect('/index.html');
});

router.get('/cards', function(req, res) {
	res.send('alll info about cards');
});


// Return router
module.exports = router;