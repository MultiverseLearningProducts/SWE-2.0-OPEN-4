const sequelize = require('sequelize')

const Pet = require('./Pet')
const User = require('./User')

Pet.belongsTo(User)
User.hasMany(Pet)

module.exports = { Pet, User }