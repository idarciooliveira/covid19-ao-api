const stateModel = require('../models/state');
const indexController = {};

indexController.index = async (req,res)=>{
    const states = await stateModel.find().populate('cases');
    res.json(states);
}

module.exports = indexController;