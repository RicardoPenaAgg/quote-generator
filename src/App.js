import logo from './logo.svg';
import './App.css';
import React from "react";
function App() {
  const [quoteData,setQuoteData] = React.useState({})
  const getQuote= async ()=>{
  const quoteData = await fetch("https://api.quotable.io/random")
  return quoteData.json()
  }
  
  const updateQuote=()=>{
    getQuote().then((quote)=>{setQuoteData(quote)})
  }
  React.useEffect(updateQuote,[])

  const encodedQuote = encodeURIComponent(quoteData.content + "\n - " + quoteData.author)// makes URL safe
  return (
   
    <div id="quote-box" >
          <div id="text">
              {quoteData.content}
          </div>
          <div id="author">
              -{quoteData.author}
          </div>
          
          
            <button id="new-quote" onClick={updateQuote}>New Quote</button>
          
          <a id="tweet-quote" title="Tweet It Now" target="_blank" href={`https://twitter.com/intent/tweet?text=${encodedQuote}`}>
            <span><img src="http://cdn.onlinewebfonts.com/svg/img_276960.png" alt="twitter icon"/></span>
            </a>

      
    </div>
  )
}

export default App;
