import React, { useState } from "react";
import Button from "../Button/Button";
import {
  StyledCreateTodo,
  StyledInput,
  StyledCheckbox,
  StyledFormGroup,
  StyledInputWrapper,
  StyledCount,
} from "./CreateTodo.styled";
import { CreateTodoProps } from "../../types/interfaces";

const CreateTodo: React.FC<CreateTodoProps> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const MAX_COUNT = 30;

  const setTitleAndCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTitle(value);
    setCount(value.length);
  };

  const clearInputs = () => {
    setTitle("");
    setCompleted(false);
  };

  return (
    <StyledCreateTodo>
      <StyledInputWrapper>
        <StyledInput
          errorColor={count > MAX_COUNT}
          type="text"
          name="todo"
          placeholder="Write todo.."
          value={title}
          onChange={event => setTitleAndCount(event)}
        />
        <StyledCount>
          {count} / {MAX_COUNT}
        </StyledCount>
      </StyledInputWrapper>
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
          clearInputs();
        }}
        text="Add Todo"
        disabled={count > MAX_COUNT || !count}
      />
    </StyledCreateTodo>
  );
};

export default CreateTodo;
