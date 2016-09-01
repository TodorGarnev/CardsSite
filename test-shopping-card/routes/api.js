// Dependencies
var express = require('express');
var router = express.Router();
var mysql = require("mysql");

// Connection to DB (MySQL)
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "card_site"
});

//information in the console.log about connection to DB - completed/error
con.connect(function(err){
	if(err){
		console.log('Error connecting to Db');
		return;
	}
	console.log('Connection established');
});


//GET request to index.html during loading of the page
router.get('/', function(req, res){
	res.redirect('/index.html');
});

//GET request to /cards
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

		console.log('>>> arr: ', arrCards); //it is shown in nodejs console log

		res.send({'data': arrCards}); //its is shown in /cards; we send this data to cart-controller.js
	});
});


 //POST request to /add
router.post('/add', function(req, res) {
    console.log('>>> name:', req.body.name);
    console.log('>>>> price:', req.body.price);
    console.log('>>> quantity:', req.body.quantity);
    var objCard = { name: req.body.name, price: req.body.price, quantity: req.body.quantity };
    con.query('INSERT INTO cards SET ?', objCard, function(err, res){
        if(err) throw err;

        console.log('>>> affectedRows: ',res.affectedRows);
    });
}); 

//DELETE request to /del
router.delete('/del/:id', function(req, res) {
	console.log('>>> id:', req.params.id);
	if (req.params.id) {
		con.query('DELETE FROM cards WHERE id = ?', req.params.id, function (err, result) {
			if (err) throw err;

			//console.log('Deleted rows: ', res.complete);
		});
	}
}); 


    
// Return router
module.exports = router;
    
    
    
    
    
    
    
    
    
    