import React from 'react'

//define the function
//JSX - allows us to write html-like tags in our javascript
function Card(props) {
    const {name, genre} = props

    return (
        <div className="card">
            <p>This band's name is: {name}</p>
            <p>This band's genre is: {genre}</p>
        </div>
    )
}


//export the function - export default 
export default Card