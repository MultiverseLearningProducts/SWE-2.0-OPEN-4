const express = require('express')
const router = express.Router() //we need to invoke Router() from our express Class
const { Band } = require('../models/index')
const { check, validationResult } = require('express-validator')

router.get('/', async (req, res) => {
    try {
       const bands = await Band.findAll()
       res.status(200).json(bands)
    } catch (error) {
       console.error(error)
       res.status(404).send('Sorry there are no bands in our database')
    }
})

router.get('/:id', async (req, res) => {
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
router.post('/',[check('name').notEmpty(), check('genre').notEmpty()],async (req, res) => {
    try {
        const {name, genre} = req.body // {name: "newBand", genre: "someGenre"}
        const errors = validationResult(req) // 
        console.log('if there are errors',errors)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        await Band.create({name, genre})
        res.status(200).send(`New band successfully created!`)
    } catch (error) {
        console.error(error)
        res.status(500).send('Cannot create new Band')
    }
})


//DELETE - remove a resource - delete a band
router.delete('/:id', async (req, res) => {
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

module.exports = router
