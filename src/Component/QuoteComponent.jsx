import React, { useState, useEffect } from 'react';

const QuoteComponent = () => {
  const [quote, setQuote] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Function to fetch the quote from the Google Sheet
  const fetchQuote = async () => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwXN9B0IUGCbFBZSYTIZUfNvP4guoSINAUo4VSm2GzCL_2TvIqLe-sPLx3XTey8Bqrn/exec?action=getQuote');
    const data = await response.json();
    setQuote(data.quote);
  };

  // Function to update the quote in the Google Sheet
  const updateQuote = async () => {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwXN9B0IUGCbFBZSYTIZUfNvP4guoSINAUo4VSm2GzCL_2TvIqLe-sPLx3XTey8Bqrn/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ action: 'updateQuote', quote: inputValue }),
    });
    const data = await response.json();
    if (data.success) {
      setQuote(inputValue);
    }
  };

  // Fetch the quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Quote App</h1>
      <p>Current Quote: {quote}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new quote"
      />
      <button onClick={updateQuote}>Update Quote</button>
    </div>
  );
};

export default QuoteComponent;
