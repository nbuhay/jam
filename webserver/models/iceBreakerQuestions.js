var mongoose = require('mongoose');

var iceBreakerQuestion = mongoose.Schema({
    questionText: String,
    responseTotal: Number
});

var IceBreakerQuestion = mongoose.model('IceBreakerQuestion', iceBreakerQuestion);