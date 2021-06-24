import React from "react";
import styled from "styled-components";

export const StyledButton:React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = props => {
  return (
    <Button {...props}>{props.value}</Button>
  )
}

const Button = styled.button`
  background-color: #FFC045;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #FFC045;
  border-radius: 3px;
`;

