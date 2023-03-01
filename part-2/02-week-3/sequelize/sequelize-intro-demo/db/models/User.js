//import database instance
const sequelize = require('../index')
//import DataTypes from sequelize 
const { DataTypes } = require('sequelize')


//Define our Model -> will get translated into a table 
const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
})


//export this model
module.exports = User