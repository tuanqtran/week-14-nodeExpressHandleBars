var express = require('express'),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(err){
	if(err){
		console.log(err);
	}
	console.log('App listening on PORT ' + PORT);
});
