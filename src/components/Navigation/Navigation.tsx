import React from "react";
import { StyledNavigation, Heading } from "./Navigation.styled";
import { NavigationProps } from "../../types/interfaces";

const Navigation: React.FC<NavigationProps> = ({ text }) => {
  return (
    <StyledNavigation>
      <Heading>{text}</Heading>
    </StyledNavigation>
  );
};

export default Navigation;
