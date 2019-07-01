const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const server_config = require('./src/config/server_config');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.json());
app.use(cors());

//MongoDB
try{
    mongoose.set('useFindAndModify', false);
    mongoose.connect(`mongodb://${server_config.mongoHost}/ams`,{useNewUrlParser : true});
    console.log('MongoDB connection was successfuly stablished.');
}catch(err){
    console.log(`Error trying mongoDB connection - ${err}`);
}
//Models
requireDir('./src/models');

//Websocket
app.use((req,res,next) =>{
    req.io = io;
    next();
})

//Routes
app.use('/api',require('./src/routes'));

server.listen(server_config.port);
console.log(`server is listenning ${server_config.port} on port.`)