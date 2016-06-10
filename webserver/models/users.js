var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    picture: String,
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
    instruments: ['String'],
    friends: ['String'],
    jamHistory: ['String'],
    favoriteAlbums: ['String']
});