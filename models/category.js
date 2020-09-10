var mongoose = require('mongoose');

var schema = mongoose.Schema;

var categorySchema = new schema({
    name : { type: String, required: true, max: 100, },
    description : { type: String, required: true, max: 1000, },
    url : String
})

module.exports = mongoose.model('categorySchema', categorySchema);