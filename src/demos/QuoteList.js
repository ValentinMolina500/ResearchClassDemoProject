function QuoteList(props) {

  const renderQuotes = () => {
    if (!props.quotes) {
      return null;
    }
    
    return props.quotes.map((quote) => {
      return <li>{quote.text} -- {quote.author}</li>
    });
  }

  return (
    <ul>
      {renderQuotes()}
    </ul>
  );
}

export default QuoteList;