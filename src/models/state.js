const mongoose = require('mongoose');

const state = mongoose.Schema({
    description: String,
    case:{
        type : mongoose.Types.ObjectId,
        ref: 'case'
    },
    latitude: String,
    longitude: String,
    isGeneral: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('states', state);