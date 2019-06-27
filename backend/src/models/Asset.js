const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const AssetSchema = mongoose.Schema({
    mac : String,
    name : String,
    type : String,
    value : Number,
    status : String
},{
    timestamps : true,
});

AssetSchema.plugin(mongoosePaginate);

mongoose.model('Asset',AssetSchema); 