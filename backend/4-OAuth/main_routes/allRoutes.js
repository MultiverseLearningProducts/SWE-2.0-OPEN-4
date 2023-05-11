const protected = (req, res, next) => {
    res.send(`THIS IS A PROTECTED ROUTE`)
}


const unprotected = (req, res, next) => {
    res.send(`Anyone can access this route`)
}

module.exports = {
    protected,
    unprotected
}