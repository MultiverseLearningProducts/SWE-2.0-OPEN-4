//import
require('dotenv').config('.env')
const cors = require('cors')
const express = require('express')
const { auth } = require('express-openid-connect') // req.oidc //users information
const morgan = require('morgan') // can see our requests in our terminal
//const routes = require('./routes')


//create our express app
const app = express()
const PORT = process.env.PORT

//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//import our enviornmental variables
const {
    AUTH0_SECRET,
    AUTH0_BASEURL,
    AUTH0_CLIENT_ID,
    AUTH0_ISSUER_BASE_URL
} = process.env


/*      configure our OIDC code         */

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: AUTH0_BASEURL,
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


/*      configure our OIDC code         */


app.listen(PORT, () => {
    console.log(`Server is up and running on port http://localhost:${PORT}`)
})

