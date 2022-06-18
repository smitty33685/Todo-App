import styled from "styled-components";
import { StyledInputProps } from "../../types/interfaces.styles";

export const StyledCreateTodo = styled.form`
  padding: 1rem 2rem;
  background-color: #e6e6e6;
  text-align: center;

  @media (min-width: 768px) {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.7rem 1rem;
  margin-bottom: 0.8rem;
  border-radius: 0.5rem;
  outline: none;
  border: none;
  box-sizing: border-box;
  color: ${props => (props.errorColor ? "#ff0000" : "#000")};
  border: 2px solid ${props => (props.errorColor ? "#ff0000" : "#fff")};

  @media (min-width: 768px) {
    width: 400px;
    margin-bottom: 0;
  }
`;

export const StyledCheckbox = styled.input``;

export const StyledFormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.8rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin: 0 1rem;
  }
`;

export const StyledInputWrapper = styled.div`
  position: relative;
`;

export const StyledCount = styled.p`
  position: absolute;
  top: 12px;
  right: 5px;
`;
