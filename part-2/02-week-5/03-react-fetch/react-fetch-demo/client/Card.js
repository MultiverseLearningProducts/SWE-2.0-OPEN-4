import React from 'react'

//define the function
//JSX - allows us to write html-like tags in our javascript
function Card(props) {
   
    return (
        <div className="card">
            <p>This band's name is: </p>
            <p>This band's genre is:</p>
        </div>
    )
}


//export the function - export default 
export default Card