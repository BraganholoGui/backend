const Sequelize = require('sequelize');
const sequelize = new Sequelize('tcc', 'root', 'Guilherme123', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;