// Inside the burgers_controller.js file, import the following:

// Express
// burger.js
var express = require('express'),
	router = express.Router(),
	burger = require('../models/burger.js')

// Create the router for the app, and export the router at the end of your file.
router.get('/', function(req, res){
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
	burger.selectAll(function(data){
		var mysqlData = {burgers: data};
		console.log(mysqlData);
		res.render('index', mysqlData);
	});
});

router.post('/burgers/create', function(req, res){
	burger.insertOne(req.body.name, function(){
		res.redirect('/burgers');		
	});
});

router.put('/burgers/update/:id', function(req, res){
	var condition = req.params.id;
	console.log('condition', condition);
	burger.updateOne(condition, function(){
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function(req, res){
	var condition = req.params.id;
	burger.deleteOne(condition, function(){
		res.redirect('/burgers');
	});
});


module.exports = router;