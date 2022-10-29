import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Quotebox from "./components/quote-box/Quote-box";
import { BounceLoader } from "react-spinners";
import "animate.css";

function App() {
  const [quote, setQuote] = useState({});

  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    setLoading(true);
    const quote = await axios.get("http://staging.quotable.io/random");
    setQuote(quote.data);
    setLoading(false);
  };

  const colors = ["#BE6E7B", "#F3B3C8", "#4B8D8F", "#90D6D8", "#D9C2BB"];

  const setColor = () => {
    const randomColor = colors[Math.floor(Math.random() * 5)];
    console.log(randomColor);
    document.documentElement.style.setProperty("--color", randomColor);
  };

  useEffect(() => {
    setColor();
    getQuote();
  }, []);
  return (
    <div className="App">
      {loading ? (
        <BounceLoader color="white" />
      ) : (
        <Quotebox
          id="quote-box"
          className="animate_animated animate__fadeIn"
          onClick={() => {
            getQuote();
            setColor();
          }}
          text={quote.content}
          autor={quote.author}
        />
      )}
      <p>by Simon Villalon</p>
      <p>Github: github.com/SimonVillalonIT</p>
    </div>
  );
}

export default App;
