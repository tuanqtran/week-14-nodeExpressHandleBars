// Create an orm.js file inside config directory.
// Import (require) connection.js into orm.js
var connection = require('./connection.js');

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers.
// These are the methods you will need to use in order to retrieve and store data in your database.

var orm = {
	// selectAll()
	selectAll: function(callback){
		connection.query('SELECT * FROM burgers', function(err, result){
			if(err) throw err;
			callback(result);
		});
	},
	// insertOne()
	insertOne: function(burgerName, callback){
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [burgerName], function(err, result){
			if(err) throw err;
			callback(result);
		});
	},
	// updateOne()
	// tableInput = burgers
	updateOne: function(condition, callback){
		connection.query('UPDATE burgers SET devoured = 1 WHERE id = ?', [condition], function(err, result){
			if(err) throw err;
			callback(result);
		});
	},
	
	deleteOne: function(condition, callback){
		connection.query('DELETE FROM burgers WHERE id = ?', [condition], function(err, result){
			if(err) throw err;
			callback(result);
		});
	}	
};
// Export the ORM object in module.exports.
module.exports = orm;