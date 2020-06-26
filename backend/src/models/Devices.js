const mongoose = require('mongoose');

const DevicesSchema = mongoose.Schema({
    company : String,
    name : String,
    active : Boolean,
    type : String,
    model : String,
},{timestamps : true});

module.exports = mongoose.model('Devices',DevicesSchema);