'use strict'

const Credit = require('../models/creditcard');
const User = require('../models/user');
const fs = require('fs');
const path = require('path');

//credit test
function test(req, res){
    res.status(200).send({
        message: 'creditcard controller working successfully'
    });
}
//

//credits get method
function getCredits(req, res){
    var userId = req.params.id;

    User.findOne({
        where: {id: userId}
    }).then(user => {
        if(user){
            Credit.findAll({
                where: {userId : userId}
            }).then(credit => {
                res.status(200).send({
                    message: 'successfully obtained credit cards',
                    credit: credit
                });
            }).catch(err => {
                res.status(404).send({
                    message: 'failed to get credit cards',
                    err: err
                });
            })
        }
    })
}
//

//credit save method
function saveCredit(req, res){
    var userId = req.params.id;
    var params = req.body;

    User.findOne({
        where: {id : userId}
    }).then(user => {
        if(user){
            Credit.create({ 
                ncard: params.ncard,
                codecvc: params.codecvc,
                money: params.money,
                userId: userId
            }, {fields: [
                'ncard',
                'codecvc',
                'money',
                'userId'
            ]}).then(credit => {
                res.status(200).send({
                    message: 'Credit card created with success',
                    credit: credit
                });
            }).catch(err => {
                res.status(400).send({
                    message: 'Failed to create credit card',
                    err: err
                });
            })
        }
    })
}

//credit update credit
function updateCredit(req, res){
    var userId = req.params.id;
    var params = req.body;

    User.findOne({
        where: {id: userId}
    }).then(user => {
        if(user){
            Credit.update({
                ncard: params.ncard,
                codecvc: params.codecvc,
                money: params.money,
                userId: userId
            }, {return: true,
            where: {userId: userId}
        }).then(credit => {
            res.status(200).send({
                message: 'Credit card updated with success',
                credit: credit
            });
        }).catch(err => {
            res.status(400).send({
                message: 'Failed updatting the credit card',
                err: err
            });
        })
        }
    })
}
//

module.exports = {
    test,
    saveCredit,
    getCredits,
    updateCredit,
    getCredit
}