// demo 3: data rendering and mutable lists

import React, { useState } from "react";
import quotes from "./quotes.json";

// Import our custom React component 
import QuoteList from "./QuoteList";

function Demo3(props) {
  const [customQuotes, setCustomQuotes] = useState([]);
  const [quoteText, setQuoteText] = useState("");
  const [quoteAuthor, setQuoteAuthor] = useState("Anonymous");

  const resetInputs = () => {
    setQuoteAuthor("");
    setQuoteText("");
  }

  const onAddQuote = () => {

    // Create quote object
    const quote = {
      text: quoteText,
      author: quoteAuthor
    };

    // Add it to the list (syntax is funky)
    setCustomQuotes(oldQuotes => [...oldQuotes, quote]);

    // Reset inputs 
    resetInputs();
  }

  return (
    <div>
      <h1>Super Cool Quotes</h1>

      <h3>Built in quotes</h3>
      <QuoteList quotes={quotes} />
      <hr />
      
      <h3>Custom quotes</h3>
      <QuoteList quotes={customQuotes} />
      <hr />

      <label>Add your own quotes</label>
      <br />
      <input placeholder="Quote text" onChange={e => setQuoteText(e.target.value)} value={quoteText} />
      <br />
      <input placeholder="Quote author" onChange={e => setQuoteAuthor(e.target.value)} value={quoteAuthor} />
      <br />
      <button onClick={onAddQuote}>Add</button>
    </div>
  );
}

export default Demo3;