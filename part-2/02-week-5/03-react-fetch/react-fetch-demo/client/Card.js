import React from 'react'

//define the function
//JSX - allows us to write html-like tags in our javascript
function Card(props) {
    const {name, genre, id, getAllBands} = props
    console.log('CARD! ',props)

    //delete fetch request
    function deleteBand(id) {
        fetch(`http://localhost:8080/bands/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if(!res.ok) {
                throw new Error('delete was not successful')
            } else {
               alert('BAND DELETED!')
               getAllBands() 
            }      
        }).catch(error => console.error(error))
    }

    function handleDelete() {
        deleteBand(id)
    }

    return (
        <div className="card">
            <p>This band's name is: {name}</p>
            <p>This band's genre is: {genre}</p>
            <button onClick={handleDelete}>Delete band</button>
        </div>
    )
}


//export the function - export default 
export default Card