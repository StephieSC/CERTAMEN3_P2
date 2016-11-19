var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();



// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());
// Import Models and Controllers
var models = require('./models/serie')(app, mongoose);
var SerieCtrl = require('./controllers/serie');

var router = express.Router();

// Index
router.get('/', function(req, res) { 
 res.send("Holiii");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/series') 
 .get(SerieCtrl.findAll)
 .post(SerieCtrl.add);


app.use('/api', api);

// Start server
app.listen(3000, function() {
 console.log("Ir a http://localhost:3000");
});
// Connection to DB
mongoose.connect('mongodb://localhost/series', function(err, res) {
 if(err) throw err;
 console.log('Conectado a la base de datos!');
});
