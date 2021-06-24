import React from "react";
import styled from "styled-components";
import { ITask } from "../Interfaces";
import { StyledButton } from "./StyledButton";
import { StyledLabel } from "./StyledLabel";

interface Props {
  task: ITask;
  completeTask(tasknameToDelete: string): void;
}

const Card:React.FC<Props> = props => {
  
  return (
    <StyledContainer theme={theme}>
      <StyledLabel>Task:</StyledLabel>
      <Title>{props.task.title}</Title>
      <StyledLabel>Register Date:</StyledLabel>
      <Date>{props.task.date}</Date>
      <StyledLabel>Comment:</StyledLabel>
      <Description>{props.task.comment}</Description>
      <Actions>
        <StyledButton value="Done" onClick={() => props.completeTask(props.task.title)}>
        </StyledButton>
      </Actions>
    </StyledContainer>
    )
}

export default Card;

const theme = {
  border: {
   cool: "pink" 
  }, 
  primary: {
    main: "##e66465"
  },
  secondary: {
    main: "#9198e5"
  }
}

const StyledContainer = styled.div`
  border: ${(props) => `1px solid ${props.theme.border.cool}`};
  border-radius: 5px;
  padding: 25px 12px 18px;
  width: 250px;
  background-color: #4D4D4D;
;
`

const Title = styled.h2`
  color: #F9F9F9;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`

const Date = styled.div`
  color: #F9F9F9;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`

const Description = styled.p`
  color: #F9F9F9;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Actions = styled.div`
  color: #333;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: flex-end;
`