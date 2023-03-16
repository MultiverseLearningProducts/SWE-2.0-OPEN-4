//import
import React from 'react'
import Card from './Card'

//functional component
//If you are return multi-lines, we need to wrap our jsx with a react fragment
function App() {   
    const names = ['Expedia', 'Double Verify', 'Fiserv']

    return (
        <>
            <div className="container">
                <h1>Hello World!</h1>
                {
                    names.map((name , idx) => {
                        return <Card id={idx} name={name} />
                    })
                }
            </div>
        </>
    )
}

export default App