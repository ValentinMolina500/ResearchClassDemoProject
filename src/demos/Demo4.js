// demo 4: celcius converter

import React, { useState } from "react";

function Demo4() {

  const onValueChange = (e) => {
    let input;

    /* Convert the input to number */
    if (e.target.value == "") {
      input = e.target.value;
    } else {
      input = Number(e.target.value);
    }

    // set value of input here 
  }

  return (
    <div>
      <h1>Fahrenheit Converter</h1>
      <p><i>Those pesky Celsius values...</i></p>
    </div>
  );
}

export default Demo4;