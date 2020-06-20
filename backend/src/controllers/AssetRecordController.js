const mongoose = require('mongoose');
const { create } = require('../models/AssetRecord');
const AssetRecord = require('../models/AssetRecord');
const { listAll } = require('./UserController');
const AssetRecordController = mongoose.model('AssetRecord');

module.exports = {
    async create(req,res){
        const payload = await AssetRecord.create(req.body);
        console.log(payload);
        res.json(payload);
    },
    async listAll(req,res){
        const response = await AssetRecord.find();
        console.log(response);
        res.json(response);
    },

}