const express = require('express');
const userController = require('../controllers/user');
const api = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({uploadDir: './uploads/users'});

api.get('/testUser', userController.test);
api.post('/saveUser', userController.saveUser);
api.get('/getUsers', userController.getUsers);
api.get('/getUser/:id', userController.getUser);
api.put('/updateUser/:id', userController.updateUser);
api.post('/uploadImage/:id', multipartMiddleware, userController.uploadImage);
api.get('/getImage/:image', userController.getImage); 
api.delete('/deleteUser/:id', userController.deleteUser); 

module.exports = api;