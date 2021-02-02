import React from "react";

import { StyledButton } from "../Button/Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({ text, variant = "primary" }) => {
  return <StyledButton variant={variant}>{text}</StyledButton>;
};
