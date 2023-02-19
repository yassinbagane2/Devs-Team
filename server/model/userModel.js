const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Please add a a full name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    repeatedPassword: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);