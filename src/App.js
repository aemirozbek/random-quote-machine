import { useState } from "react";
import "./App.css";


let initialQuoteSwitch = true
function App() {
  const [quote, setQuote] = useState({});
  let quoteOnly = quote.text;
  let author = quote.author;
  let tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(quoteOnly)}"${encodeURIComponent(" "+author)}`
  

  function fetchQuote() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuote(data[Math.floor(Math.random() * data.length)]);
      });
  }
    if(initialQuoteSwitch){
      fetchQuote();
      initialQuoteSwitch = false
      quoteOnly = quote.text;
      author = quote.author;
    }
  

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="text">With the realization of ones own potential and self-confidence in ones ability, one can build a better world.</div>
        <div id="author">-{author !== null && author}{author === null && "Unknown"}</div>
        <div>
          <button id="new-quote" onClick={fetchQuote}>
            New Quote
          </button>
          <a id="tweet-quote" className="twitter-share-button" href={tweetUrl} target="_blank" text={quoteOnly}>Tweet this</a>
        </div>

      </div>
    </div>
  );
}

export default App;
