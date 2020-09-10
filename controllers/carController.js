var cars = require('../models/item');
var brands = require('../models/category');

exports.carslist = function(req, res, next) {
    cars.find({'category': req.params.id}).then(result => {
        res.render('cars',  {cars: result, brand: req.params.id})
    })
}

exports.addcar = function(req, res, next) {
    const {name, description, price} = req.body;

    brands.findById(req.params.id).then(result => {
        const newcar = new cars({
            name,
            description,
            category: result._id,
            price
        });
        newcar.save((err, result) => {
            if (err) {
                throw err
            }

            else {
                res.redirect(`/`)
            }
        })
    })
}

exports.addcarform = function(req, res, next) {
    res.render('carform', {category: req.params.id})
}