// demo 2: basic calculator

import React from "react";

function Demo1() {
  // Create state for result
  const [result, setResult] = React.useState("");
  const [firstInput, setFirstInput] = React.useState(0);
  const [secondInput, setSecondInput] = React.useState(0);

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

  // Create functions for arithmetic
  const resetInputs = () => {
    setFirstInput(0);
    setSecondInput(0);
  }

  const add = () => {
    setResult(firstInput + secondInput);
    resetInputs();
  }

  const multiply = () => {
    setResult(firstInput * secondInput);
    resetInputs()
  }

  const subtract = () => {
    setResult(firstInput - secondInput);
    resetInputs();
  }

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
    </div>
  );
}

export default Demo1;