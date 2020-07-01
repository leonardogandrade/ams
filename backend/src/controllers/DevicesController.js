const mongoose = require('mongoose');
const { create, findByIdAndDelete, findByIdAndRemove, findById } = require('../models/Devices');
//const Devices = require('../models/Devices');
const { listAll } = require('./UserController');
const Devices = mongoose.model('Devices');

module.exports = {
    async create(req,res){
        const payload = await Devices.create(req.body);
        console.log(payload._id);
        res.json(payload._id);
    },

    async updateOrder(req,res){
        const deviceName = req.params.devname;
        const updatedData = req.body;
        
        const response = await Devices.findOneAndUpdate({'name' : deviceName},{order : updatedData});
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

// async delOrder(req,res){
//     const {orderID,deviceName} = req.body;
//     let del_index;

//     const {order} = await Devices.findOne({
//         'name' : {$eq : deviceName}
//     });

//     order.filter((value,index)=>{
//         if(value._id == orderID){
//             del_index = index;
//         }
//     });

//     order.splice(del_index,1);
//     const response = await Devices.findOneAndUpdate({'name' : deviceName},{order});
//     res.json(response);
// },

// async addOrder(req,res){
//     const devName = req.params.devName;
//     const {_id : devID} = await Devices.findOne({'name' : {$eq : devName}})

//     const {code,description,destination,deadline,checkin,checkout,destinationAddress} = req.body;
//     const {order} = await Devices.findById(devID);

//     order.push({code,description,destination,deadline,checkin,checkout,destinationAddress});
    
//     const response = await Devices.findOneAndUpdate(devName,{
//         order : order
//     });
    
//     console.log(response);
//     res.json(response);
// },