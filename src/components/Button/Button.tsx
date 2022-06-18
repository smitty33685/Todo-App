import React from "react";
import { StyledButton } from "./Button.styled";

interface Props {
  text: string;
  handleClick: () => void;
}

const Button: React.FC<Props> = ({ text, handleClick }) => {
  return <StyledButton onClick={handleClick}>{text}</StyledButton>;
};

export default Button;
