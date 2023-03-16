const express = require('express')
const router = express.Router() //we need to invoke Router() from our express Class
const { Musician } = require('../models/index')

//READ - get
router.get('/', async (req, res) => {
    try {
       const musicians = await Musician.findAll()
       res.status(200).json(musicians)
    } catch (error) {
       console.error(error)
       res.status(404).send('Sorry there are no musicians in our database')
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id // this is from the request url
        const foundMusician = await Musician.findByPk(id)
        res.status(200).json(foundMusician)
    } catch (error) {
        console.error(error)
        res.status(404).send('')
    }
})

//Update - PUT - update a resource - a musicians name
router.put('/:id', async (req, res) => {
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

//Update - PATCH - update a musicians band affiliation 
router.patch('/:id/bands/:bandId', async (req, res) => {
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

module.exports = router