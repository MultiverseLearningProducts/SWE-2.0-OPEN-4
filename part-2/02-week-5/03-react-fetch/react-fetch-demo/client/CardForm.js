import React, { useState } from 'react'

function CardForm() {
    const [bandName, setBandName] = useState('')
    const [genre, setGenre] = useState('')

    //setBandNameChange
    function setBandNameChange(event) {
        //update the bandName state hook
        setBandName(event.target.value)
    }

    //setGenreNameChange
    function setGenreNameChange(event) {
        setGenre(event.target.value)
    }

    //fetch - POST
    function handleSubmit(event) {
        event.preventDefault() //<- prevents refreshing the page
        const bandData = { name: bandName, genre: genre } //<- req.body {name: bandName, genre: genre}
        console.log('BAND DATA? ', bandData)
        //define our fetch request
        fetch('http://localhost:8080/bands', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bandData)
        }).then(() => {
            alert('A newBand created!')
            setBandName('')
            setGenre('')
        }).catch(error => console.error(error))
    }


  return (
    <form onSubmit={handleSubmit}>
       <label>
        Band Name:
            <input
                type="text"
                value={bandName}
                onChange={setBandNameChange}
            />
       </label>
       <br/>
       <label>
        Genre:
            <input
                type="text"
                value={genre}
                onChange={setGenreNameChange}
            />
       </label>
       <br/>
        <button type="submit">Create Band!</button>
    </form>
  )
}

export default CardForm