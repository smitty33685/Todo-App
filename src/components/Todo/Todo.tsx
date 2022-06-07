import React from "react";
import { StyledTodo } from "./Todo.styled";

interface Props {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Todo: React.FC<any> = ({ id, userId, title, completed }) => {
  return <StyledTodo>{title}</StyledTodo>;
};

export default Todo;
