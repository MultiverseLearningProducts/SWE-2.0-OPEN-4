import React, {useState} from 'react'

function CardForm(){
    const [bandName, setBandName] = useState("");
    const [genre, setGenre] = useState("");
  
    const handleBandNameChange = (event) => {
      setBandName(event.target.value);
    };
  
    const handleGenreChange = (event) => {
      setGenre(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault(); //prevents refreshing the page
      const bandData = { name: bandName, genre: genre}
      // Here you can send the data to the server or perform any other action
      fetch('http://localhost:8080/bands', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', //the headers object includes a Content-Type header with a value of application/json. This header indicates that the request body is formatted as a JSON string, and it tells the server how to interpret the data that is being sent in the request.
        },
        body: JSON.stringify(bandData), // formatting the data in a way that can be sent as a request body to the server.
      })
        .then(()=> {
          alert('a new band created!')
          console.log('new band created!')
          setBandName('')
          setGenre('')
      })
        .catch(error => console.error(error));
    };

  return (
    <form onSubmit={handleSubmit}>
        <label>
        Band name:
            <input
                type="text"
                value={bandName}
                onChange={handleBandNameChange}
            />
        </label>
    <br />
        <label>
        Genre:
            <input type="text" value={genre} onChange={handleGenreChange} />
        </label>
    <br />
        <button type="submit">Create band</button>
  </form>
  )
}

export default CardForm