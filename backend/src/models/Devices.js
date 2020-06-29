const mongoose = require('mongoose');

const DevicesSchema = mongoose.Schema({
    company : String,
    name : String,
    active : Boolean,
    type : String,
    model : String,
    delivery : [{
        code : String,
        description : String,
        destination : {
            lat : String,
            lon : String
        },
        deadline : Date,    //Stablished time to deliver
        checkin : Date,     //Time which the package arrived at shipping company
        checkout : Date     //Time which delivery was made
    }]
},{timestamps : true});

module.exports = mongoose.model('Devices',DevicesSchema);