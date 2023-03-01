/* IMPORTS */
//1. sequelize instance
const sequelize = require('../index') //importing our db connection
//2. User model
// const User = require('../models/User') // importing our model
// const Pet = require('../models/Pet')
const { User, Pet } = require('../models/index')
//3. seed data 
const users = require('./seed-users.json') //importing our seed data
const pets = require('./seed-pets.json')





//Define a function that will help us seed that info into our table
//async await - allow us to make this function behave asynchronously 
async function seedDatabase() {
    //sync our database - clear out all tables - everytime we restart our app we wont create duplicates
    await sequelize.sync({ force: true})
   
    //Add our users to our User model
    //bulkCreate allows you to insert multiple records at a time
    await User.bulkCreate(users)
    await Pet.bulkCreate(pets)
    
    console.log(`database seeded successfully`)
}


//invoke that function
seedDatabase()