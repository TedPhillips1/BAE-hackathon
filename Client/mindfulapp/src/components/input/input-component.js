import { Input } from "./input-styled";

function InputComponent({ onChange }) {
  return <Input type="text" onChange={onChange} />;
}

export default InputComponent;
