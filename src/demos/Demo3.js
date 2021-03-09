// demo 3: data rendering and mutable lists

import React, { useState } from "react";

// Import database of quotes
import QUOTES_DATABASE from "./quotes.json";

// Import our custom React component 
import QuoteList from "./QuoteList";

function Demo3(props) {
  const [customQuotes, setCustomQuotes] = useState([]);

  // TODO: add quote author state variable
  const [quoteText, setQuoteText] = useState("");
  
 
  const resetInputs = () => {
    // TODO: reset inputs back to "" 
  }

  const onAddQuote = () => {

    // Create quote object
    const quote = {
      text: quoteText,
      author: "Anonymous"
    };

    // Add it to the list (syntax is funky)
    setCustomQuotes(oldQuotes => [...oldQuotes, quote]);

    // Reset inputs here
  }

  return (
    <div>
      <h1>Super Cool Quotes</h1>

      <h3>Built in quotes</h3>

      {/* Pass in quotes database as a prop */}
      <QuoteList />
      <hr />
      
      <h3>Custom quotes</h3>
      <QuoteList quotes={customQuotes} />
      <hr />

      <label>Add your own quotes</label>
      <br />
      <input placeholder="Quote text" onChange={e => setQuoteText(e.target.value)} value={quoteText} />
      <br />
      <button onClick={onAddQuote}>Add</button>
    </div>
  );
}

export default Demo3;