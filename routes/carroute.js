var express = require('express');
var route = express.Router();

var brandController = require('../controllers/brandController');
var carController = require('../controllers/carController');

route.get('/:id', carController.carslist);

route.get('/:id/addcar', carController.addcarform);

route.post('/:id/addcar', carController.addcar);

module.exports = route;