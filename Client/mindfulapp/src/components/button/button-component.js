import { Button } from "./button-styled";

function ButtonComponent({ onClick, text }) {
  return <Button onClick={onClick}>{text}</Button>;
}

export default ButtonComponent;
