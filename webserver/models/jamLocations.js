var mongoose = require('mongoose');

var jamLocation = new mongoose.Schema({
    goal: 'String',
    time: 'Date',
    host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    capacity: 'Number',
    geoLocation: {
        type: [Number], 
        index: '2dsphere'
    },
    description: 'String',
    picture: 'String'
});

var JamLocation = mongoose.model('JamLocation', jamLocation);