var cars = require('../models/item');
var brands = require('../models/category');

var async = require('async');

var validator = require('express-validator');

exports.displaybrands = function(req, res, next) {
    brands.find()
        .exec((err, result) => {
            if(err) {
                throw err;
            }
            else {
                res.render('brands', {brands: result});
            }
        })
}

exports.addbrandform = function(req, res, next) {
    res.render('brandform');
}

exports.addbrand = function(req, res, next) {
    var instance = new brands();
    instance.name = req.body.name;
    instance.description = req.body.description;

    instance.save(function(err) {
        if (err) {
            throw err;
        }

        else{
            res.redirect('/');
        }
    })
}

