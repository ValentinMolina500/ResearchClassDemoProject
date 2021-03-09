// demo 1: simple coun// demo 1: simple counter

import React, { useState } from "react";

function Demo1() {
  // Create state for the counter 
  const [counter, setCounter] = useState(0);
  
  // Create two functions
  const increment = () => {
    // TODO: Add way to increment counter state 
  }

  const decrement = () => {
    // TODO: Add way to decrement counter state 
  }

  return (
    <div>
      <h1>Number of Assignments Procrastinated</h1>

      {/* Render current value of counter */}
      <p>Current Value: </p>

      {/* Render buttons to interact with counter */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      
    </div>
  );
}

export default Demo1;