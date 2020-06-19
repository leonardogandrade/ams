const mongoose = require('mongoose');
const { create } = require('../models/AssetRecord');
const AssetRecord = require('../models/AssetRecord');
const AssetRecordController = mongoose.model('AssetRecord');

module.exports = {
    async create(req,res){
        const payload = await AssetRecord.create(req.body);
        console.log(payload);
        res.json(payload);
    },
}