const router = require('express').Router()
const { requireAuth } = require('./middleware/auth') // helper function that will determine if a user has been authenticated
const { home, login, logout } = require('./controllers/authController')

const { protected, unprotected } = require('./main_routes/allRoutes')


router.get('/', home)
router.get('/login', login)
router.get('/logout', logout)


//protected + unprotected routes
router.get('/protected', requireAuth, protected)
router.get('/unprotected', unprotected)



module.exports = router