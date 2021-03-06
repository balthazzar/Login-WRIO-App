import bodyParser from 'body-parser'

var exports = module.exports = {};

exports.init = function (express) {
	var app = express();

	// Add headers
	app.use(function (request, response, next) {
		//console.log(request);
		response.setHeader('Access-Control-Allow-Origin', 'https://wrioos.com');
		response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		response.setHeader('Access-Control-Allow-Credentials', true);
		next();
	});
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	return app;
};
