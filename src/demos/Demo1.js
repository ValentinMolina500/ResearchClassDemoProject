// demo 1: simple coun// demo 1: simple counter

import React from "react";

function Demo1() {
  // Create state for the counter 
  const [counter, setCounter] = React.useState(0);
  
  // Create two functions
  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Number of Assignments Procrastinated</h1>

      {/* Render current value of counter */}
      <p>Current Value: {counter}</p>

      {/* Render buttons to interact with counter */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
}

export default Demo1;