const express = require('express');
const creditController = require('../controllers/creditcard');
const api = express.Router();

api.get('/testCredit', creditController.test);
api.post('/saveCredit/:id', creditController.saveCredit);
api.get('/getCredits/:id', creditController.getCredits);
api.get('/getCredit/:id', creditController.getCredit); 
api.put('/updateCredit/:id', creditController.updateCredit);

module.exports = api;