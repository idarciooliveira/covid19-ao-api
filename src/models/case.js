const mongoose = require('mongoose');

const cases = mongoose.Schema({
    total: Number,
    recoverd: Number,
    death: Number, 
    actives: Number,
    news:Number,
    Data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('cases', cases)