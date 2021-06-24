import React from "react";
import styled from "styled-components";

export const StyledLabel:React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = props => {
  return (
    <TextLabel {...props}/>
  )
}


const TextLabel = styled.label`
  margin-top: 5px;
  margin-right: 1em;
  color: #fff;
`;