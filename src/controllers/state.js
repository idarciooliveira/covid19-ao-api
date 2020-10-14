const stateModel = require('../models/state');
const caseModel = require('../models/case');

const stateController = {};

stateController.find = async (req,res)=>{
    const states = await stateModel.find().populate('cases');
    res.json(states);
}

stateController.findById = async(req,res)=>{
    const {id} = req.params;

    const state = await stateModel.findById(id).populate('cases');
    if(!state) res.status(404).send({message: 'Not Found'});
    return res.json(state);
}

stateController.create = async(req,res)=>{
    const { description } = req.body;

    if(await stateModel.findOne({description})) 
        return res.status(400).send({message: 'Description already in use'})

    const newCase = new caseModel({
        ...req.body
    });

    await newCase.save();

    const state = new stateModel({
        ...req.body,
        case: newCase._id
    });

    await state.save();

    return res.json({state: state, case: newCase});
}

stateController.update = async(req, res)=>{
    const {stateId} = req.body;
    
    const state = await stateModel.findById(stateId);
    
    if(!state) return res.status(404).send({message: "Not Found"});
    
    await caseModel.findByIdAndUpdate(state.case,{...req.body});

    res.send();
}

module.exports = stateController;