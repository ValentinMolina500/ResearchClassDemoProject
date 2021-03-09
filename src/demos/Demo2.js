// demo 2: basic calculator

import React, { useState } from "react";

function Demo1() {
  // Create state for result
  const [result, setResult] = useState("");
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);

  /* Handle when user types into inputs */
  const onFirstInputChanged = (e) => {
    let value;

    /* Convert the input to number */
    if (e.target.value == "") {
      value = e.target.value;
    } else {
      value = Number(e.target.value);
    }

    setFirstInput(value);
  }

  const onSecondInputChanged = (e) => {
    let value;

    /* Convert the input to number */
    if (e.target.value == "") {
      value = e.target.value;
    } else {
      value = Number(e.target.value);
    }

    setSecondInput(value);
  }


  const resetInputs = () => {
    /* TODO: Reset value of inputs to 0 */
  }

  // Create functions for arithmetic
  const add = () => {
    // TODO: add input values, set result, and reset inputs 
  }

  const multiply = () => {
    // TODO: multiply input values, set result, and reset inputs 
  }

  const subtract = () => {
    // TODO: subtract input values, set result, and reset inputs 
  }

  // TODO: Add a function to divide for numbers (no need to check for divide by 0)

  return (
    <div>
      <h1>Amazing Calculator</h1>

      {/* Render result */}
      <p>Result = {result}</p>

      {/* Render inputs for values */}
      <label>First Value</label> 
      <br />
      <input onChange={onFirstInputChanged} value={firstInput} type="number" />
      <br />

      <label>Second Value</label> 
      <br />
      <input onChange={onSecondInputChanged} value={secondInput} type="number" />
      <br />

      {/* Render buttons */}
      <button onClick={add}>ADD</button>
      <button onClick={subtract}>SUBTRACT</button>
      <button onClick={multiply}>MULTIPLY</button>

      {/* TODO: Add button for division */}

    </div>
  );
}

export default Demo1;