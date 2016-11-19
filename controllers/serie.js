var mongoose = require('mongoose');
var Serie = mongoose.model('Serie');

//GET - Devuelve TODOS las series
exports.findAll = function(req, res) {
 Serie.find(function(err, series) {
 if(err) res.send(500, err.message);
 console.log('GET /series')
 res.status(200).jsonp(series);
 });
};


//POST - Inserta nueva serie
exports.add = function(req, res) {
 console.log('POST');
 console.log(req.body);
 var serie = new Serie({
 name: req.body.name
 });
 serie.save(function(err, serie) {
 if(err) return res.send(500, err.message);
 res.status(200).jsonp(serie);
 });
};



