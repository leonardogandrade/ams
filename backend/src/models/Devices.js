const mongoose = require('mongoose');

const DevicesSchema = mongoose.Schema({
    company : String,
    name : String,
    active : Boolean,
    type : String,
    model : String,
    order : [{
        code : String,
        description : String,
        destination : {
            lat : String,
            lon : String
        },
        deadline : Date,    //Stablished time to deliver
        checkin : {         //Time which the package arrived at shipping company
            type : Date,
            default : Date.now
        },     
        checkout : {
            type : Date,
            default : Date.now, //Time which order was made
        }
    }]
},{timestamps : true});

module.exports = mongoose.model('Devices',DevicesSchema);