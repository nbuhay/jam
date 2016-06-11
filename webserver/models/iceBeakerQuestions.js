var mongoose = require('mongoose');

var iceBreakerQuestion = mongoose.Schema({
    questionText: 'String',
    userAnswer: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            response: 'String'
        }
    ]
});

var IceBreakerQuestion = mongoose.model('IceBreakerQuestion', iceBreakerQuestion);