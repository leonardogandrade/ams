const mongoose = require('mongoose');

const AssetRecordSchema = mongoose.Schema({
    company : String,
    name : String,
    active : Boolean
},{timestamps : true});

module.exports = mongoose.model('AssetRecord',AssetRecordSchema);