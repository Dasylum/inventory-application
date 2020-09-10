var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors());

var path = require('path');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var categoryModel = require('./models/category');
var itemModel = require('./models/item');

var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://NewDiet:Ds8764082465@cluster0.sbfkl.mongodb.net/inventoryapplicatoinDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var brandroute = require('./routes/brandroute.js');
var carroute = require('./routes/carroute');

app.use('/cars', carroute);

app.use('/', brandroute);

app.listen(8000, (req, res) => {
    console.log('Inventory application server running on port 8000...');
})