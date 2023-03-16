//import
import React, {useState, useEffect} from 'react'
import Card from './Card'
import CardForm from './CardForm'

//functional component
//If you are return multi-lines, we need to wrap our jsx with a react fragment
function App() {   
    //define our hook that will store our band data
    const [bands, setBands] = useState([])

    //useEffect - this is a react hook that allows you to perform side effects in functional components. Some of these side effects include: API calls, updating the DOM, setting up event listeners. The hook lets you manage these side effects by defining a function that will be executed after every render cycle.
        //1.fetch - get - get all the bands 
        //2. store the bands as a hook in our functional component.

    function getAllBands() {
        fetch('http://localhost:8080/bands', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => setBands(data))
        .catch(error => console.error(error))
    }


    useEffect(() => {
        getAllBands()
    }, [])


    //1. seed my db [x]
    //2. run my backend [x]
    //3. on a separate terminal run the front end

    //CORS - cross-origin resource sharing - 
    //1. npm i cors


    return (
        <>
            <div className="container">
                <CardForm />
                {
                    bands.map(({name, genre, id}, idx) => {
                        return <Card key={idx} name={name} genre={genre} id={id} getAllBands={getAllBands}/>
                    })
                }
            </div>
        </>
    )
}

export default App