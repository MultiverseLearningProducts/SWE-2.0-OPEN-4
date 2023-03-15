import {React, useState} from 'react' //import useState hook


function Counter() {
  //declare a state variable - set an initial value of your state
      //state   function that updates state
  const [count, setCount] = useState(0)

  //define a function to update the count state variable
  function updateCount() {
    //use setCount to update our state
    setCount(count + 1)
  }

  return (
      <div>
       <p>You clicked the button {count} times!</p>
        <button onClick={()=>updateCount}>Click Me!!</button>
      </div>
  )
}

export default Counter
