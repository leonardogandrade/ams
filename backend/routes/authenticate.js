const express = require('express');
const routes = express.Router();
const Login = require('../src/controllers/LoginController');


routes.post('/signin',Login.signIn);

module.exports = routes;