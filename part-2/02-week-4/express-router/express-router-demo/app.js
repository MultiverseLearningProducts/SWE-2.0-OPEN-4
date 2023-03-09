//imports
const express = require('express')
const app = express() //create an instance of express
const port = 8080

//import routes
const musicanRoutes = require('./server/routes/musicianRoutes')
const bandRoutes = require('./server/routes/bandRoutes')


app.use(express.json()) //exposes our req.body to our server

//import your routes here
app.use('/musicians', musicanRoutes)
app.use('/bands', bandRoutes)


// //get routes
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })


//define where your express server will be listening to
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})