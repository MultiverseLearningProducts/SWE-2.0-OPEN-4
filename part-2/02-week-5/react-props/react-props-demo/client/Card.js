import React from 'react'

//define the function
//JSX - allows us to write html-like tags in our javascript
function Card(props) {
    const {name} = props
    return (
        <h3>Hello World! This is: {name}</h3>
    )
}


//export the function - export default 
export default Card