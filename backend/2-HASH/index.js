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
    // const hashedNoSalt = await crypto.createHash('sha256').update(user.password).digest('base64')
    // const hashedNoSalt2 = await crypto.createHash('sha256').update(user2.password).digest('base64')


    // console.log('USER1 ', hashedNoSalt)
    // console.log('USER2 ', hashedNoSalt2)

    //hashing with salting - see what this looks like in our db [bcrypt]
    const bcryptHash = await bcrypt.hash(user.password, SALT_COUNT)
    const bcryptHash2 = await bcrypt.hash(user2.password, SALT_COUNT)

    console.log('USER1 ', bcryptHash)
    console.log('USER2 ', bcryptHash2)

    //storing our user information (username + hashedpassword) in our database

    await User.create({username: user.username, password: bcryptHash}) // creates a user with our salted and hashed password
    await User.create({username: user2.username, password: bcryptHash2})

    
  } catch (error) {
    console.error(error)
  } finally {
    sequelize.close();
  }
}


run();
