import styled from "styled-components";

export const Emoji = styled.button`
  border: none;
  background-color: #fac8cd;
  font-size: 25px;
  border-radius: 50%;

  &&:active {
    background-color: #85696c;
    transform: translateY(2px);
  }
`;
