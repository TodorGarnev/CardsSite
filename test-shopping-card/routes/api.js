// Dependencies
var express = require('express');
var router = express.Router();
var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "cards_site"
});

con.connect(function(err){
	if(err){
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
});


router.get('/', function(req, res){
	res.redirect('/index.html');
});

router.get('/cards', function(req, res) {
	con.query('SELECT * FROM cards', function (err, rows) {
		if(err) throw err;

		var arrCards = [];

		for (var i = 0; i < rows.length; i++) {
			if (rows[i]) {
				var objData = {};
				objData.id = rows[i].id;
				objData.name = rows[i].name;
				objData.price = rows[i].price;
				objData.quantity = rows[i].quantity;
			}
			arrCards.push(objData);
		}

		console.log('>>> arr: ', arrCards);

		res.send({'data': arrCards});
	});
});


// Return router
module.exports = router;