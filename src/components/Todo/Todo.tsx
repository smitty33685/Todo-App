import React from "react";
import { StyledTodo } from "./Todo.styled";
import { TodoObj } from "../../types/interfaces";

const Todo: React.FC<TodoObj> = ({ id, title, completed }) => {
  return (
    <StyledTodo>
      {id} {title}
    </StyledTodo>
  );
};

export default Todo;
