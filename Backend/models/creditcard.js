const Sequelize = require('sequelize');
const sequelize = require('../database');
const User = require('./user');

const Creditcard = sequelize.define('cards', {
    ncard: {
        type: Sequelize.NUMBER
    },
    codecvc: {
        type: Sequelize.NUMBER
    },
    money: {
        type: Sequelize.NUMBER
    }
}, {timestamps: false});

// se crea userId en la tabla Creditcard
User.hasMany(Creditcard); //usuario tiene muchas tarjetas de credito
Creditcard.belongsTo(User); //tarjetas de credito pertenece a un usuario
//

module.exports = Creditcard;