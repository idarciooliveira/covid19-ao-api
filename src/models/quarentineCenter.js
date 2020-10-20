const mongoose = require('mongosse');

const quarentineCenter = mongoose.Schema({
    description: String,
    latitude: String,
    longitude: String,
    images: String,
    state:{
        type : mongoose.Types.ObjectId,
        ref: 'case'
    }
});

module.exports = mongoose.model('quarentineCenter',quarentineCenter)