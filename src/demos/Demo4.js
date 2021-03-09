// demo 4: celcius converter

import React, { useState } from "react";

function Demo4() {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);

  const onValueChange = (e) => {
    let input;

    /* Convert the input to number */
    if (e.target.value == "") {
      input = e.target.value;
    } else {
      input = Number(e.target.value);
    }

    setValue(input);
  }

  const onConvert = () => {
    const convertedValue = (value - 32) * (5/9);
    setResult(convertedValue);
  }
  return (
    <div>
      <h1>Fahrenheit Converter</h1>
      <p><i>Those pesky Celsius values...</i></p>
      <p>Result = {result}°C</p>
      <p></p>
      <label>Fahrenheit</label>
      <br />
      <input onChange={onValueChange} type="number"></input>
      <button onClick={onConvert}>Convert</button>
    </div>
  );
}

export default Demo4;