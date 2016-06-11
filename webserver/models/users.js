var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    picture: String,
    instruments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Instrument'
        }
    ],
    friends: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    jamHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'JamLocation'
        }
    ],
    favoriteAlbums: [String],
    spotifyLink: String,
    soundCloudLink: String
});

var User = mongoose.model('User', userSchema);