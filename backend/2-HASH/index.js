const crypto = require('crypto'); //native to node
const bcrypt = require('bcrypt'); //npm install
const { sequelize } = require('./db');
const { User } = require('./models');

const SALT_COUNT = 10; //defined by us

const run = async () => {
  try {

    /* *************** SETUP *************** */
    await sequelize.sync({force: true});
    const user = {username: 'johnDoe', password: 'test123'};
    const user2 = {username: 'user_2', password: 'test123'};

    console.log("Let's start hashing some passwords!");

    /* *************** START DEMO *************** */
    
    //hashing without salting - see what this looks like in our db [crypto]
  

    //hashing with salting - see what this looks like in our db [bcrypt]


    //storing our user information (username + hashedpassword) in our database


    
  } catch (error) {
    console.error(error)
  } finally {
    sequelize.close();
  }
}


run();
