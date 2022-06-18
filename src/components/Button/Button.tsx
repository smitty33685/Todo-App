import React from "react";
import { StyledButton } from "./Button.styled";
import { ButtonProps } from "../../types/interfaces";

const Button: React.FC<ButtonProps> = ({ text, handleClick }) => {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
