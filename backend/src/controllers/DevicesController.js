const mongoose = require('mongoose');
const { create } = require('../models/Devices');
//const Devices = require('../models/Devices');
const { listAll } = require('./UserController');
const Devices = mongoose.model('Devices');

module.exports = {
    async create(req,res){
        const payload = await Devices.create(req.body);
        console.log(payload._id);
        res.json(payload._id);
    },
    async addDeliver(req,res){
        const deviceCode = req.params.code;
        const {code,description,destination,deadline,checkin,checkout} = req.body;
        const {order} = await Devices.findById(deviceCode);

        order.push({code,description,destination,deadline,checkin,checkout});
        
        const response = await Devices.findOneAndUpdate(deviceCode,{
            order : order
        });
        
        console.log(response);
        res.json(response);
    },
    async orderByDevice(req,res){
        const deviceID = req.params.id;
        const response = await Devices.findOne({'name' : {$eq : deviceID}})
        const {order} = response;
        res.json(order);
    },
    async listAll(req,res){
        const response = await Devices.find();
        console.log(response);
        res.json(response);
    },

}