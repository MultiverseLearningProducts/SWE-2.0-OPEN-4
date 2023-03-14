const {Sequelize, sequelize} = require('../config/db');

let Band = sequelize.define('band', {
    name: Sequelize.STRING,
    genre: Sequelize.STRING
});

module.exports = {
    Band
};