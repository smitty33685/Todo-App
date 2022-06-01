import React from "react";
import { StyledNavigation, Heading } from "./Navigation.styled";

interface Props {
  text: String;
}

const Navigation: React.FC<Props> = ({ text }) => {
  return (
    <StyledNavigation>
      <Heading>{text}</Heading>
    </StyledNavigation>
  );
};

export default Navigation;
