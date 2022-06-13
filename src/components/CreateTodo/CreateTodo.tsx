import React, { useState } from "react";
import { StyledCreateTodo } from "./CreateTodo.styled";
import { NewTodo } from "../../App";

interface Props {
  addTodo: ({}: NewTodo) => void;
}

const CreateTodo: React.FC<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <StyledCreateTodo>
      <input
        type="text"
        name="todo"
        placeholder="Write todo.."
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        type="checkbox"
        name="completed"
        checked={completed}
        onChange={event => setCompleted(event.target.checked)}
      />
      <button
        onClick={() => {
          addTodo({ title: title, completed: completed });
          setTitle("");
          setCompleted(false);
        }}
      >
        Add todo
      </button>
    </StyledCreateTodo>
  );
};

export default CreateTodo;
