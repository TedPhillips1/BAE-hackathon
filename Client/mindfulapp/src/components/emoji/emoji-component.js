import { Emoji } from "./emoji-styled";

function EmojiComponent({ onClick, text }) {
  return <Emoji onClick={onClick}>{text}</Emoji>;
}

export default EmojiComponent;
