const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    dateCreate: {
        type: Date,
        default: Date.now
    },
    dateEdit: {
        type: Date,
        default: Date.now
    },
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Manager'
    },
    name: {
        type: String,
        required: true
    },
    tel: {
        type: String
    },
    email: {
        type: String
    },
    city: {
        type: String
    },
    comment: {
        type: String
    }
});

mongoose.model('Contact', Schema);