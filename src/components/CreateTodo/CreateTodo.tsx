import React, { useState } from "react";
import Button from "../Button/Button";
import { StyledCreateTodo, StyledInput, StyledCheckbox, StyledFormGroup } from "./CreateTodo.styled";
import { NewTodo } from "../../types/interfaces";

interface CreateTodoProps {
  addTodo: ({}: NewTodo) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  return (
    <StyledCreateTodo>
      <StyledInput
        type="text"
        name="todo"
        placeholder="Write todo.."
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <StyledFormGroup>
        <label>Priority:</label>
        <StyledCheckbox
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={event => setCompleted(event.target.checked)}
        />
      </StyledFormGroup>
      <Button
        handleClick={() => {
          addTodo({ title: title, completed: completed });
          setTitle("");
          setCompleted(false);
        }}
        text="Add Todo"
      />
    </StyledCreateTodo>
  );
};

export default CreateTodo;
