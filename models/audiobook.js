const mongoose = require('mongoose');

const audioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
    },
    profileImageUrl:{
        type: String
    },
    published: {
        type: String,
    },
})


const Audiobook = mongoose.model('Audiobook', audioSchema);

module.exports = Audiobook;