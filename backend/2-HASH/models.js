const {sequelize} = require('./db');
const { Sequelize } = require('sequelize');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
})

module.exports = {User};