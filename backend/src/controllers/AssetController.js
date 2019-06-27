const mongoose = require('mongoose');
const Asset = mongoose.model('Asset');

module.exports = {
    //Creating asset record.
    async Create(req,res){
        try{
            const payload = await Asset.create(req.body);
            req.io.emit('assetPost',payload);
            return res.json(payload);
        }catch(err){
            console.log(`Error while Creating assets: ${err}`);
        }
    }, 
    //List all assents limiting 20 records for page.
    async ListAll(req,res){
        try{
            const { page } = req.query;
            const response = await Asset.paginate({},{page , limit : 20});
            return res.json(response);
        }catch(err){
            console.log(`Error while fetching assets from mongoDB: ${err}`);
        }
    },

    async listById(req,res){
        const response = await Asset.findById(req.params.id);
        return res.json(response);
    }
}
