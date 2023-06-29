import { useState } from "react";
import "./App.css";

let initialQuoteSwitch = true;
function App() {
  const [quote, setQuote] = useState({});
  let quoteOnly = quote.text;
  let author = quote.author;
  let tweetUrl = `https://twitter.com/intent/tweet?text="${encodeURIComponent(
    quoteOnly
  )}"${encodeURIComponent(" " + author)}`;
  const mainColors = [
    "rgb(230, 57, 70)", // Red
    "rgb(74, 137, 220)", // Blue
    "rgb(227, 187, 101)", // Yellow
    "rgb(242, 123, 68)", // Orange
    "rgb(118, 186, 107)", // Green
    "rgb(155, 118, 230)", // Purple
    "rgb(92, 151, 191)", // Light Blue
    "rgb(170, 142, 132)", // Taupe
    "rgb(204, 122, 147)", // Dusty Rose
    "rgb(126, 174, 163)", // Seafoam Green
    "rgb(208, 169, 92)", // Mustard Yellow
    "rgb(140, 119, 163)", // Lavender
  ];
  const randomColor = `${mainColors[Math.floor(Math.random() * mainColors.length)]}`;
  const [color, setColor] = useState(randomColor);
  const textColor = { color: color, transition: "2s ease" };
  const backgroundColor = { backgroundColor: color, transition: "1.5s ease" };

  function fetchQuote() {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // The Opacity Effect is also made in this function
        document.getElementById("text").style.opacity = 0;
        document.getElementById("author").style.opacity = 0;
        setTimeout(() => {
          setQuote(data[Math.floor(Math.random() * data.length)]);
        }, 750);
        setTimeout(() => {
          document.getElementById("text").style.opacity = 1;
          document.getElementById("author").style.opacity = 1;
        }, 750);
      });
  }
  if (initialQuoteSwitch) {
    fetchQuote();
    initialQuoteSwitch = false;
    quoteOnly = quote.text;
    author = quote.author;
  }

  return (
    <div id="wrapper" style={backgroundColor}>
      <div id="quote-box">
        <div id="text" style={textColor}>
          <i class="fa-solid fa-quote-left" aria-hidden="true"></i> {quoteOnly}
        </div>
        <div id="author" style={textColor}>
          -{author !== null && author}
          {author === null && "Unknown"}
        </div>
        <div id="button-wrapper">
          <button
            id="new-quote"
            className="btn"
            onClick={() => {
              fetchQuote();
              setColor(randomColor);
            }}
            style={backgroundColor}
          >
            New Quote
          </button>
          <a
            id="tweet-quote"
            className="twitter-share-button btn"
            href={tweetUrl}
            target="_blank"
            text={quoteOnly}
            style={backgroundColor}
          >
            <i class="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
