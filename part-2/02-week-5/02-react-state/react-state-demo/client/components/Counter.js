import React from 'react' //import useState hook
import {useState} from 'react'


function Counter() {
  //declare a state variable - set an initial value of your state
      //state   function that updates state
  const [count, setCount] = useState(0)

  //define a function to update the count state variable
  function updateCount() {
    //use setCount to update our state
    setCount(count + 1)
  }

  //exercise 1: Create a decrement function and button to update state
  //exercise 2: After 10 clicks, render new text within the paragraph tag: "Thats a lot of clicks!" hint: ternary 
  //exercise 3: Create a button that will reset the counter

  return (
      <div>
       <p>You clicked the button {count} times!</p>
        <button onClick={updateCount}>Click Me!!</button>
      </div>
  )
}

export default Counter
