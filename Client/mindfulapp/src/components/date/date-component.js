import ArrowComponent from "../arrows/arrows-component";
import SecondTextComponent from "../second-text/second-text-component";
import { Date } from "./date-styled";

function DateComponent() {
  return (
    <Date>
      <ArrowComponent text="<" />
      <SecondTextComponent text="Mon 28/03/2022" />
      <ArrowComponent text=">" />
    </Date>
  );
}

export default DateComponent;
