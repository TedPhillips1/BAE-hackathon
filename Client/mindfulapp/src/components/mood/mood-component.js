import EmojiSectionComponent from "../emoji-section/emoji-section-component";
import MainTextComponent from "../main-text/main-text-component";
import { Mood } from "./mood-styled";

function MoodComponent() {
  return (
    <Mood>
      <MainTextComponent text="How are you feeling today?" />
      <EmojiSectionComponent />
    </Mood>
  );
}

export default MoodComponent;
