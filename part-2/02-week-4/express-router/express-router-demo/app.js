//imports
const express = require('express')
const app = express() //create an instance of express
const port = 8080

app.use(express.json()) //exposes our req.body to our server

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

//POST - create a resource - create a new band
app.post('/bands', async (req, res) => {
    try {
        const {name, genre} = req.body // {name: "newBand", genre: "someGenre"}
        await Band.create({name, genre})
        res.status(200).send(`New band successfully created!`)
    } catch (error) {
        console.error(error)
        res.status(500).send('Cannot create new Band')
    }
})

//PUT - update a resource - a musicians name
app.put('/musicians/:id', async (req, res) => {
    try {
        //get id from request url -> find the musician -> use .update to change the musicians information with the req.body
        const id = req.params.id
        const foundMusician = await Musician.findByPk(id)
        const newName = req.body.name

        if(foundMusician) {
            await Musician.update({ name: newName}, { where: {id}})
            res.status(200).send(`Musicians name successfully changed!`)
        } else {
            console.error()
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Cannot change musicians name') 
    }
})

//PATCH - update a musicians band affiliation 
app.patch('/musicians/:id/bands/:bandId', async (req, res) => {
    try {
        //we need both ids  
        const id = req.params.id
        const bandId = req.params.bandId

        //we need both musician and band
        const foundMusician = await Musician.findByPk(id)
        const foundBand = await Band.findByPk(bandId)

        //create the association 1:n band:musician - band has the magic methods
        await foundBand.addMusician(foundMusician)

        res.status(200).send('Musician added to band!')
    } catch (error) {
        console.error(error)
        res.status(500).send('Cannot associate musician to that band') 
    }
})

//DELETE - remove a resource - delete a band
app.delete('/bands/:id', async (req, res) => {
    try {
        //grab the id -> attempt to delete the band use the .destroy sequelize method -> try to look for band
        const id = req.params.id
        await Band.destroy({
            where: {id}
        })
        const foundBand = await Band.findByPk(id)
        if(!foundBand) {
            res.status(200).send('band deleted successfully!')
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Cannot delete a band') 
    }
})


//define where your express server will be listening to
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})