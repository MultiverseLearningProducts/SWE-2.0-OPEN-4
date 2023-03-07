//imports
const express = require('express')
const app = express() //create an instance of express
const port = 3000

//import our models 
const { Band, Musician } = require('./server/models/index')

//define your routes / endpoints
// app.httpMethod(request url path, callbackfunction)
app.get('/', (req, res) => {
    //define your enpoint logic
    res.send('Hello World!')
})

app.get('/greeting', (req, res) => {
    //define your enpoint logic
    res.send('Hello There this is another greeting!!!!')
})

//define an endpoint that will return back to the client all the musicians
// always use nouns, broad to specific
// async await
app.get('/musicians', async (req, res) => {
    try {
       const musicians = await Musician.findAll()
       res.status(200).json(musicians)
    } catch (error) {
       console.error(error)
       res.status(404).send('Sorry there are no musicians in our database')
    }
})

//request params - define a dynamic request url /:
//we want to request only one musician from our db
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

//

//define where your express server will be listening to
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})