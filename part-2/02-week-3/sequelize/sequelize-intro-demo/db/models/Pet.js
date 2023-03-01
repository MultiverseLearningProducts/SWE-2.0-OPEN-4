//import database instance
const sequelize = require('../index')
//import DataTypes from sequelize 
const { DataTypes } = require('sequelize')


//Define our Model -> will get translated into a table 
const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    age: DataTypes.INTEGER
})


//export this model
module.exports = Pet