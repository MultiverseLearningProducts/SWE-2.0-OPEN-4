//import sequelize dependency
const { Sequelize } = require('sequelize')

//create a sequelize instance
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'awesomedatabase.sqlite'
})

//The new Sequelize constructor creates a connection pool for connecting to our database and the options passed into the constructor specifies the ype of database that is being used (sqlite)

//export our instance
module.exports = sequelize