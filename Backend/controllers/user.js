'use strict'

const User = require('../models/user');
const Credit = require('../models/creditcard');
const fs = require('fs');
const path = require('path');

//User test method
function test (req, res) {
    res.status(200).send({
        message: 'user controller working successfully'
    })
}
//

// Users get method
function getUsers (req, res){
    User.findAll()
        .then( users => {
            res.status(200).send({
                message: 'successfully obtained users',
                users: users
            });
        })
        .catch( err => {
            res.status(404).send({
                message: 'failed to get users',
                err: err
            });
        })
}
//

//User get method
function getUser(req, res){
    var userId = req.params.id;
    User.findOne({
        where: {id: userId}
    }).then(user => {
        res.status(200).send({
            message: 'successfully obtained user',
            user: user
        });
    }).catch(err => {
        res.status(404).send({
            message: 'failed to get user',
            err: err
        });
    })
}
//

//User save method
function saveUser(req, res){
    var params = req.body;

    User.create({
        name: params.name,
        lastname: params.lastname,
        document: params.document,
        email: params.email,
        password: params.password,
        role: params.role,
        image: params.image
    }, {fields: [
        'name',
        'lastname',
        'document',
        'email',
        'password',
        'role',
        'image'
    ]}).then( user => {
        res.status(200).send({
            message: 'User created with success',
            user: user
        });
    }).catch(err => {
        res.status(400).send({
            message: 'Failed to create user',
            err: err
        });
    })
}
//

//User Update method
function updateUser(req, res){
    var userId = req.params.id;
    var params = req.body;

    User.update({
        name: params.name,
        lastname: params.lastname,
        document: params.document,
        email: params.email,
        password: params.password,
        role: params.role,
        image: params.image
    }, {return: true,
        where: { id: userId }
    }).then(user => {
        res.status(200).send({
            message: 'User updated with success',
            user: user
        });
    }).catch(err => {
        res.status(400).send({
            message: 'Failed updatting the user',
            err: err
        });
    })
}
//

//User Upload image method
function uploadImage(req, res){
    var userId = req.params.id;
    var params = req.body;

    if(req.files){
        var filePath = req.files.image.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[2];
        var extSplit = fileName.split('\.');
        var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                User.update({
                    image: fileName
                }, {return: true,
                where: {id: userId}
            }).then(user => {
                res.status(200).send({
                    message: 'User updated with success',
                    user: user
                });
            }).catch(err => {
                res.status(500).send({
                    message: 'Failed uploading the image',
                    err: err
                })
            })
        }else{
            fs.unlink(filePath, (err)=> {
                res.status(404).send({
                    message: 'invalid extension',
                    err: err
                });
            })
        }
    }
}
//

//User Get image method
function getImage(req, res){
    var file = req.params.image;
    var path_file = './uploads/users/' + file;

    fs.exists(path_file, (exists) => {
        if(exists){
            return res.sendFile(path.resolve(path_file));
        }else{
            return res.status(404).send({
                message: 'the image does not exist'
            })
        }
    })
}
//

//User delete method
function deleteUser(req, res){
    var userId = req.params.id;

    Credit.destroy({
        where : {userId : userId}
    }).then(credit => {
        if(credit){
            User.destroy({
                where: {id: userId}
            }).then(user => {
                res.status(200).send({
                    message: 'User deleted with successfully',
                    user : user
                });
            }).catch(err => {
                res.status(500).send({
                    message: 'operator delete failed',
                    err: err
                });
            })
        }else{
            User.destroy({
                where: {id: userId}
            }).then(user => {
                res.status(200).send({
                    message: 'User deleted with successfully',
                    user : user
                });
            }).catch(err => {
                res.status(500).send({
                    message: 'operator delete failed',
                    err: err
                });
            })
        }
    })
}
//

module.exports = {
    test,
    saveUser,
    getUsers,
    getUser,
    updateUser,
    uploadImage,
    getImage,
    deleteUser
}