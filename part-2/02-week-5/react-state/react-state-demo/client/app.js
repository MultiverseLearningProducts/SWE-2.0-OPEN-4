//import
import React from 'react'
import Card from './components/Card'
import Counter from './components/Counter'
import '../client/styles.css' //adding css to your react

//functional component
//If you are return multi-lines, we need to wrap our jsx with a react fragment
function App() {
    // const name = 'Ciara'
    const names = ['Expedia', 'Double Verify', 'Fiserv']

    return (
        <>
        <div className="container">
            <Counter />
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