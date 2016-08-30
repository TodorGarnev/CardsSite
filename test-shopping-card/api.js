// Dependencies
var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var http = require("http");

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


/* //POST request to /add
router.post('/add', function(req, res) {
    var card = { name: "fourth card", price: "2.25", quantity: "7" };
    con.query('INSERT INTO cards SET ?', card, function(err,res){
        if(err) throw err;
        
        console.log('Last insert ID:', res.insertId);
        //res.send({'data': card});
    });
}); */



router.post('/add', function(req, res, next) {
    var card = req.body;
    console.log('request received:', req.body);
   var query = connection.query('insert into cards set ?', card, function (err, result) {
    if (err) {
        console.error(err);
        return res.send(err);
    } else {
        return res.send('Ok');
    }
    });
    res.send('received the data.');
    });

//app.listen(8000);




    
// Return router
module.exports = router;
    
    
    
    
    
    
    
    
    
    