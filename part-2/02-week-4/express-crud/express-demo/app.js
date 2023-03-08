//imports
const express = require('express')
const app = express() //create an instance of express
const port = 8080

app.use(express.json())

//import our models 
const { Band, Musician } = require('./server/models/index')

//get routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/musicians', async (req, res) => {
    try {
       const musicians = await Musician.findAll()
       res.status(200).json(musicians)
    } catch (error) {
       console.error(error)
       res.status(404).send('Sorry there are no musicians in our database')
    }
})

app.get('/musicians/:id', async (req, res) => {
    try {
        const id = req.params.id // this is from the request url
        const foundMusician = await Musician.findByPk(id)
        res.status(200).json(foundMusician)
    } catch (error) {
        console.error(error)
        res.status(404).send('')
    }
})

app.get('/bands', async (req, res) => {
    try {
       const bands = await Band.findAll()
       res.status(200).json(bands)
    } catch (error) {
       console.error(error)
       res.status(404).send('Sorry there are no bands in our database')
    }
})

app.get('/bands/:id', async (req, res) => {
    try {
        const id = req.params.id // this is from the request url
        const foundBand = await Band.findByPk(id)
        res.status(200).json(foundBand)
    } catch (error) {
        console.error(error)
        res.status(404).send('Sorry no band was found')
    }
})

//POST


//PUT


//PATCH


//DELETE


//define where your express server will be listening to
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})