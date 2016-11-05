// Inside burger.js, import orm.js into burger.js
var orm = require('../config/orm.js');

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
	selectAll: function(callback){
		orm.selectAll(function(res){
			callback(res);
		});
	},
	insertOne: function(burgerName, callback){
		orm.insertOne(burgerName, function(res){
			callback(res);
		});
	},
	updateOne: function(condition, callback){
		orm.updateOne(condition, function(res){
			callback(res);
		});
	},
	deleteOne: function(condition, callback){
		orm.deleteOne(condition, function(res){
			callback(res);
		});
	}
};
// Export at the end of the burger.js file.
module.exports = burger;

