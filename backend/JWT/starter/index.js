const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser"); // you need this to access req.cookies
const port = 8080;

//Make sure you require dotenv and envoke the config method
//Let's move the JWT_SECRET into an new .env file
//Finally, let's make sure we move the secrte to the .env file
const jwt = require('jsonwebtoken');
require('dotenv').config();

//1. Create a .env file
const JWT_SECRET = process.env.JWT_SECRET;

const bcrypt = require('bcrypt');
const SALT_COUNT = 5;

const {User} = require('./db/User');
const { sequelize } = require('./db/db');

sequelize.sync({ force: false });

app.use(cookieParser()); //to be able to access req.cookies
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

///////////////////////// routes /////////////////////////
app.get('/', async (req, res, next) => {
  res.send("ROUTE IS WORKING!")
})


//registering a user - attaching a token
app.post('/register', async (req, res, next) => {
  try {
    //grab username,password, permission from req.body
    const { username, password, permission } = req.body
    //salt and hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, SALT_COUNT)
    //create a new user 
    const user = await User.create({ username, password: hashedPassword, permission})
    //create your JWT token - jwt.sign(payload, secret)
    //payload - never include the password - username, permission
    const token = jwt.sign({username: user.username, permission: user.permission}, JWT_SECRET)
    //store the token as a cookie
    res.status(200).cookie('token-as-a-cookie', token, {httpOnly: true}).send({message: "New User created!", token})
  } catch (error) {
    console.error(error)
    next(error)
  }
})


// //login - always use post for the sake of demoing we can use get
app.post('/user', async (req, res, next) => {
  try {
    //extract username and password from req.body
    const {username, password} = req.body
    // find the user in our database - bcrypt
    const user = await User.findOne({ where: {username} })
    //compare plaintext input (salted+hashed) with the password that lives inside the db
    const isMatch = await bcrypt.compare(password, user.password) // returns a boolean
    if(isMatch) {
      //generate a JWT token 
      const {username, permission} = user
      //jwt.sign(payload, secret) 
      //payload - include username and permission
      const token = jwt.sign({username, permission}, JWT_SECRET) 
      //response - add the token as a cookie
      res.status(200).cookie('token-as-a-cookie', token, {httpOnly: true}).send({message: "login successful!", user: user, token})
    } else {
      res.sendStatus(401).send('USER DOES NOT EXIST')
    }
  }   
   catch (error) {
    console.error(error);
    next(error)
  }
})

// //middleware function to protect an admin endpoint
function isAdmin (req,res,next) {
  //check to see if the incoming request's cookie has a token
  const token = Object.values(req.cookies)[0]
  console.log('token ', token)
  //we need to verify the token - jwt.verify(token, jwtsecret)
  const verified = jwt.verify(token, JWT_SECRET)
  //if the token is verified - we need to determine if the user has admin privilages
  if(verified.permission === 'admin') {
    next()
  } else {
    res.status(403).send('Forbidden')
  }
}


// //route that will only be accessbile to a user that is logged in and has a valid JWT
app.get('/admin', isAdmin , async (req, res, next) => {
  try {
    res.status(200).send('This is a protected route for Admins only')
  } catch (err) {
    console.error(err)
  }
})



///////////////////////// routes /////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
