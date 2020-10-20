const quarentineCenterModel = require('../models/quarentineCenter');

const quarentineCenterController = {};

quarentineCenterController.find = async (req,res)=>{
    const quarentineCenters = await quarentineCenterModel.find().populate('state');
    res.json(quarentineCenters);
}

quarentineCenterController.findById = async(req,res)=>{
    const {id} = req.params;
    const quarentineCenter = await quarentineCenterModel.findById(id).populate('state');
    if(!quarentineCenter) res.status(404).send({message: 'Not Found'});
    return res.json(quarentineCenter);
}

quarentineCenterController.create = async(req,res)=>{
    const { description } = req.body;

    if(await quarentineCenterModel.findOne({description})) 
        return res.status(400).send({message: 'Description already in use'})

    const quarentineCenter = new quarentineCenterModel({
        ...req.body,
    });

    await quarentineCenter.save();

    return res.json({quarentineCenter: quarentineCenter});
}

quarentineCenterController.update = async(req, res)=>{
    const {quarentineCenterId} = req.body;
    
    const quarentineCenter = await quarentineCenterModel.findById(quarentineCenterId);
    
    if(!quarentineCenter) return res.status(404).send({message: "Not Found"});
    
    await quarentineCenterModel
        .findByIdAndUpdate(quarentineCenterId,{...req.body});

    res.send();
}

module.exports = quarentineCenterController;