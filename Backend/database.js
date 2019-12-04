const Sequelize = require('sequelize');
const sequelize = new Sequelize('cashcard', 'root', 'deivid311', {
    host: 'localhost',
    dialect: 'mysql'
})

// CONNECTION DB
module.exports = sequelize;
global.sequelize = sequelize;