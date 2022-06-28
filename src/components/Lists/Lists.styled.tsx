import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
