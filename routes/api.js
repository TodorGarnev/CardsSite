var express = require('express');
var router = express.Router();
var mysql = require("mysql");

router.get('/', function(req, res){
	res.redirect('/index.html');
});

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "card_site"
});

con.connect(function(err){
	if(err){
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
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
		res.send({'data': arrCards});
	});
});

router.post('/add', function(req, res) {
    var objCard = { name: req.body.name, price: req.body.price, quantity: req.body.quantity };
    con.query('INSERT INTO cards SET ?', objCard, function(err, res){
        if(err) throw err;
	 });
});

	router.put('/update/:id/:quantity', function(req, res) {
	console.log('>>> id:', req.params.id);
	console.log('>>> quantity:', req.params.quantity);

	if (req.params.id) {
		con.query('UPDATE cards SET quantity = ? Where ID = ?', [req.params.quantity, req.params.id], function (err, result) {
			if (err) throw err;
		});
	}
});

router.delete('/del/:id', function(req, res) {
	console.log('>>> id:', req.params.id);
	if (req.params.id) {
		con.query('DELETE FROM cards WHERE id = ?', req.params.id, function (err, result) {
			if (err) throw err
		});
	}
});


router.delete('/del', function(req, res) {
	con.query('DELETE FROM cards', function (err, result) {
		if (err) throw err;
	});
});

module.exports = router;
