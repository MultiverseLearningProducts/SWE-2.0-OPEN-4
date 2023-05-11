const home = (req, res, next) => {
    if(req.oidc.isAuthenticated()) {
        console.log('USER', req.oidc)
        res.send(`Welcome home ${req.oidc.user.name}`)
    } else {
        res.redirect('/login')
    }
}


const login = (req, res, next) => {
    req.oidc.login()
}


const logout = (req, res, next) => {
    req.oidc.logout()
}


module.exports = {
    home,
    login,
    logout
}