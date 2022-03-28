import React, { useState, useEffect } from "react";
import MainTextComponent from "../main-text/main-text-component";
import { Quote } from "./quote-styled";

function ranGen(length) {
  const num = Math.floor(Math.random() * length);
  return num;
}

function QuoteComponent({ text }) {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    async function fetchQuote() {
      const data = await fetch("https://type.fit/api/quotes");
      const response = await data.json();
      setQuote(response[ranGen(response.length)]);
    }
    fetchQuote();
    console.log(quote);
  }, []);

  return (
    <Quote>
      <MainTextComponent text={quote.text} />
    </Quote>
  );
}

export default QuoteComponent;
