var express = require('express');
var route = express.Router();

var brandController = require('../controllers/brandController');
var carController = require('../controllers/carController');

route.get('/', brandController.displaybrands);

route.get('/addbrand', brandController.addbrandform);

route.post('/addbrand', brandController.addbrand);

module.exports = route;