const { Pirate } = require('../models/pirate.model');

module.exports.index = (req, res) => {
    res.json({
        message: 'Hello Pirate Crew'
    });
};
module.exports.createPirate = (req, res) => {
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => res.status(400).json(err));
};
module.exports.getAll = (req, res) => {
    Pirate.find()
        .then(getAll => res.json(getAll))
        .catch(err => res.json(err));
};
module.exports.getOne = (req, res) => {
    Pirate.findOne({_id:req.params.id})
        .then(getOne => res.json(getOne))
        .catch(err => res.json(err));
};
module.exports.updatePirate = (req, res) => {
    Pirate.findByIdAndUpdate({_id:req.params.id}, req.body,{
        new: true,
        runValidators: true
    })
        .then(() => res.json({ status: 'success'}))
        .catch(err => res.status(400).json(err));
};
module.exports.deletePirate = (req, res) => {
    Pirate.deleteOne({_id:req.params.id})
        .then(deleted => res.json(deleted))
        .catch(err => res.json(err));
};