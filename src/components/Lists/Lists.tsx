import React, { useContext } from "react";
import { StyledMain } from "./Lists.styled";
import { Context } from "../../App";
import Todo from "../Todo/Todo";

const Lists = () => {
  const todos = useContext(Context);

  return (
    <StyledMain>
      {todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </StyledMain>
  );
};

export default Lists;
