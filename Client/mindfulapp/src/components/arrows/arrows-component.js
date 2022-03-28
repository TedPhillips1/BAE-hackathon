import { Arrow } from "./arrows-styled";

function ArrowComponent({ onClick, text }) {
  return <Arrow onClick={onClick}>{text}</Arrow>;
}

export default ArrowComponent;
