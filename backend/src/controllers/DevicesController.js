const mongoose = require('mongoose');
const { create } = require('../models/Devices');
//const Devices = require('../models/Devices');
const { listAll } = require('./UserController');
const Devices = mongoose.model('Devices');

module.exports = {
    async create(req,res){
        const payload = await Devices.create(req.body);
        console.log(payload);
        res.json(payload);
    },
    async listAll(req,res){
        const response = await Devices.find();
        console.log(response);
        res.json(response);
    },

}