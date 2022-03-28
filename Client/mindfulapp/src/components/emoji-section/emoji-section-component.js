import EmojiComponent from "../emoji/emoji-component";
import { EmojiSection } from "./emoji-section-styled";

function EmojiSectionComponent({ one, two, three, four, five }) {
  return (
    <EmojiSection>
      <EmojiComponent onClick={one} text="😞" />
      <EmojiComponent onClick={two} text="😕" />
      <EmojiComponent onClick={three} text="😐" />
      <EmojiComponent onClick={four} text="🙂" />
      <EmojiComponent onClick={five} text="😁" />
    </EmojiSection>
  );
}

export default EmojiSectionComponent;
