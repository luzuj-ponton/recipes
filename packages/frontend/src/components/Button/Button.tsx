import React from "react";

import { StyledButton } from "../Button/Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary" }) => {
  //Remove and use one from common.styled.ts??
  return <StyledButton variant={variant}>{children}</StyledButton>;
};
