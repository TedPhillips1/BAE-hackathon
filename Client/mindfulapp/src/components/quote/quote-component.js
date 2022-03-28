import MainTextComponent from "../main-text/main-text-component";
import { Quote } from "./quote-styled";

function QuoteComponent({ text }) {
  return (
    <Quote>
      <MainTextComponent text={text} />
    </Quote>
  );
}

export default QuoteComponent;
