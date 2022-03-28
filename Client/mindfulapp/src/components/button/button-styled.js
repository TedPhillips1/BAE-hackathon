import styled from "styled-components";

export const Button = styled.button`
  height: 40px;
  width: 90px;
  background-color: #1c2541;
  color: white;
  border: none;
  border-radius: 5%;
  font-size: 20px;

  &&:active {
    transform: translateY(2px);
    background-color: #3a506b;
  }
`;
