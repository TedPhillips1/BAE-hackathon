import InputComponent from "../input/input-component";
import MainTextComponent from "../main-text/main-text-component";
import { Journal } from "./journal-styled";

function JournalComponent({ onChange }) {
  return (
    <Journal>
      <MainTextComponent text="Can you expand on this?" />
      <InputComponent onChange={onChange} />
    </Journal>
  );
}

export default JournalComponent;
