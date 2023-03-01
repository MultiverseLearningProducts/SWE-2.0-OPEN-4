/* IMPORTS */
//1. sequelize instance
const sequelize = require('../index') //importing our db connection
//2. User model
const User = require('../models/User') // importing our model
//3. seed data 
const users = require('./seed-data.json') //importing our seed data




//Define a function that will help us seed that info into our table
//async await - allow us to make this function behave asynchronously 
async function seedUsers() {
    //sync our database - clear out all tables - everytime we restart our app we wont create duplicates
    await sequelize.sync({ force: true})
   
    //Add our users to our User model
    //bulkCreate allows you to insert multiple records at a time
    await User.bulkCreate(users)

    console.log(`database seeded successfully`)
}


//invoke that function
seedUsers()