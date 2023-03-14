//import
import React from 'react'
import Card from './Card'

//functional component
//If you are return multi-lines, we need to wrap our jsx with a react fragment
function App() {
    // const name = 'Ciara'
    const names = ['Expedia', 'Double Verify', 'Fiserv']

    return (
        <>
            <h1>Hello World!</h1>
            {
                names.map((name , idx) => {
                    return <Card id={idx} name={name} />
                })
            }
        </>
    )
}

export default App