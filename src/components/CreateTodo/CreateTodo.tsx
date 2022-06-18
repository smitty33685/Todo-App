import React, { useState } from "react";
import Button from "../Button/Button";
import { StyledCreateTodo, StyledInput, StyledCheckbox, StyledFormGroup } from "./CreateTodo.styled";
import { CreateTodoProps } from "../../types/interfaces";

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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
      />
      <StyledFormGroup>
        <label>Completed:</label>
        <StyledCheckbox
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setCompleted(event.target.checked)}
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
