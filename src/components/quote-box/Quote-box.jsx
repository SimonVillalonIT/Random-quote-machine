import React from "react";
import "./Quote-box.css";
import { FaTwitter, FaTumblr } from "react-icons/fa";

const Quotebox = (props) => {
  return (
    <div className="container">
      <div>
        <span id="text">"{props.text}"</span>
        <p id="author">- {props.autor}</p>
      </div>
      <div className="buttons scale">
          <a
            id="tweet-quote"
            target="_blank"
            href={`https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2FSimonVillalonIT&text=${props.text}&hashtags=quotes`}
          >
            <FaTwitter className="icon" />
          </a>
        <button id="new-quote" className="newQuote" onClick={props.onClick}>
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotebox;
