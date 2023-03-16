//import react dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js' //top level react component that will render the rest of our components in our component tree

//render our top level component
ReactDOM.render(
    <App/>, //will render this component
    document.getElementById('root') //within this element located in our index.html
)