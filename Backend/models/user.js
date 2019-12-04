const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING
    },
    lastname: {
        type: Sequelize.STRING
    },
    document: {
        type: Sequelize.NUMBER
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING
    }
}, {timestamps: false});

module.exports = User;