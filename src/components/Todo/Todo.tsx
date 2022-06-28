import React from "react";
import { StyledTodo, StyledParagraph } from "./Todo.styled";
import { TodoObj } from "../../types/interfaces";

const Todo: React.FC<TodoObj> = ({ id, title, completed }) => {
  return (
    <StyledTodo completed={completed}>
      <StyledParagraph>{id}</StyledParagraph>
      <h4>{title}</h4>
    </StyledTodo>
  );
};

export default Todo;
