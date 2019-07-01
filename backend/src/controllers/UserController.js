const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = {
    async Create(req,res){
        try{
            const payload = await User.create(req.body);
            return res.json(payload);
        }catch(err){
            console.log(`Error while creating user - ${err}`);
        }
    },

    async listAll(req,res){
        try{
            const response = await User.find();
            return res.json(response);
        }catch(err){
            console.log(`Error while feching listAll users - ${err}`);
        }
    },

    async listById(req,res){
        try{
            const response = await User.findById(req.params.id);
            return res.json(response)
        }catch(err){
            console.log(`Error while fetching User by ID - ${err}`)
        }
    },

    async updateUser(req,res){
        try{
            const payload = await User.findByIdAndUpdate(req.params.id,req.body,{new : true});
            return res.json(payload);
        }catch(err){
            console.log(`Error while updating UserById - ${err}`)
        }
    }
    

}
