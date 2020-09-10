var mongoose = require('mongoose');
var category = require('./category');

var schema = mongoose.Schema;

var itemSchema = new schema({
    name : { type: String, required: true, max: 100, },
    description : { type: String, required: true, max: 1000, },
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'category'},
    price : { type: Number, required: true, },
    url : String
})

module.exports = mongoose.model('itemSchema', itemSchema);