import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "../../types/interfaces";

const Button: React.FC<ButtonProps> = ({ text, handleClick, disabled }) => {
  return (
    <StyledButton onClick={handleClick} disabled={disabled}>
      {text}
    </StyledButton>
  );
};

export default Button;
