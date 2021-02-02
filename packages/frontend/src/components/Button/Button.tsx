import React from "react";

import { StyledButton } from "../Button/Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ children, variant = "primary" }) => {
  return <StyledButton variant={variant}>{children}</StyledButton>;
};
