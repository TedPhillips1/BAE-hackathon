import React, { useState, useEffect } from "react";
import MainTextComponent from "../main-text/main-text-component";
import { Quote } from "./quote-styled";

function QuoteComponent({ text }) {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    async function fetchQuote() {
      const data = await fetch("https://https://api.quotable.io/random");
      const response = await data.json();
      console.log(response);
      setQuote(response);
    }
    fetchQuote();
    console.log(quote);
  }, [quote]);

  return (
    <Quote>
      <MainTextComponent text="Never give up!" />
    </Quote>
  );
}

export default QuoteComponent;
