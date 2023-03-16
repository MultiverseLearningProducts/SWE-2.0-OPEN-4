//import react dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js' //top level react component that will render the rest of our components in our component tree


const root = ReactDOM.createRoot(document.getElementById("root")); //within this element located in our index.html

//render our top level component
root.render(
    <App/>, //will render this component
)