const express = require('express');
const routes = express.Router();
const AssetLogController = require('../src/controllers/AssetLogController');
const AssetRecord = require('../src/controllers/AssetRecordController');
const UserController = require('../src/controllers/UserController');
const authMiddleware = require('../src/middleware/auth');
const AssetRecordController = require('../src/controllers/AssetRecordController');

//Middleware jwt any routes except login
//routes.use(authMiddleware);

//####### ASSETLOG ROUTES #######
routes.get('/asset',AssetLogController.ListAll);
routes.get('/asset/:id',AssetLogController.listById);

//Mobile Assets - Cars, Buses, etc
routes.get('/mobileassets',AssetLogController.listMobileAssets);
routes.post('/mobileassets/:mac',AssetLogController.listByMac);

//Asset Error Reports
routes.get('/assetError',AssetLogController.countErrors);

//####### ASSETRECORD ROUTES #######
routes.post('/assetrecord',AssetRecordController.create);
routes.get('/assetrecord',AssetRecordController.listAll);



//####### USER ROUTES #######
routes.post('/user',UserController.Create);
//routes.post('/login/',UserController.signIn);
routes.get('/user',UserController.listAll);
routes.get('/user/:id',UserController.listById);
routes.put('/user/:id',UserController.updateUser);

module.exports = routes;