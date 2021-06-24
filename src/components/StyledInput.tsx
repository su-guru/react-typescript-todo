import React from "react";
import styled from "styled-components";

export const StyledInput:React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => {
  return (
      <TextInput {...props}/>
  )
}

const TextInput = styled.input.attrs(props => ({
  // we can define static props
  type: props.type,
  name: props.name,
}))`
  height: 2.4em;
  width: 100%;
  padding: 0 14px;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 0 1px #ccc inset;
  appearance: none;
  &::focus {
    outline: 0;
    box-shadow: 0 0 0 2px rgb(33, 150, 243) inset;    
  }
`;