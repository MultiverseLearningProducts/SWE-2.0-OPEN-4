const {Sequelize, sequelize} = require('./db');

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  permission: Sequelize.STRING
});

module.exports = { User };
