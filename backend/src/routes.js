const express = require('express');
const routes = express.Router();
const AssetController = require('./controllers/AssetController');

routes.post('/asset',AssetController.Create);
routes.get('/asset',AssetController.ListAll);
routes.get('/asset/:id',AssetController.listById);

module.exports = routes;