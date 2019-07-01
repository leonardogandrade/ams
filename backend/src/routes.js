const express = require('express');
const routes = express.Router();
const AssetController = require('./controllers/AssetController');
const UserController = require('./controllers/UserController');

//Asset Routes
routes.post('/asset',AssetController.Create);
routes.get('/asset',AssetController.ListAll);
routes.get('/asset/:id',AssetController.listById);

//User Routes
routes.post('/user',UserController.Create);
routes.get('/user',UserController.listAll);
routes.get('/user/:id',UserController.listById);
routes.put('/user/:id',UserController.updateUser);

module.exports = routes;