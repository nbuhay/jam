var mongoose = require('mongoose');

var instrument = mongoose.Schema({
    category: String,
    subCategory: String,
    picture: String
});

var Instrument = mongoose.model('Instrument', instrument);