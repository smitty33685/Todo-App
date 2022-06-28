import styled from "styled-components";
import { StyledTodoProps } from "../../types/interfaces.styles";

export const StyledTodo = styled.div<StyledTodoProps>`
  padding: 1rem;
  display: flex;
  border-radius: 0.25rem;
  background: ${props => (props.completed ? "#008000" : "#b30000")};
  color: #fff;
  cursor: pointer;
`;

export const StyledParagraph = styled.p`
  margin-right: 1rem;
`;
