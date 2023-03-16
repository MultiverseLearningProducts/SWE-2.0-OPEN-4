import React, {useState} from 'react'

//define the function
//JSX - allows us to write html-like tags in our javascript
function Card(props) {
    const {name, genre, id, getAllBands} = props
    console.log('id', id)

    const deleteBand = (id) => {
        fetch(`http://localhost:8080/bands/${id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            console.log('Band deleted successfully');
            getAllBands()
          })
          .catch(error => console.error(error));
    };

    const handleClick = () => {
        deleteBand(id)
    }

    return (
        <div className="card">
            <p>This band's name is {name}</p>
            <p>The genre is called {genre}</p>
            <button onClick={handleClick}>delete</button>
            <button>update</button>
        </div>
    )
}


//export the function - export default 
export default Card