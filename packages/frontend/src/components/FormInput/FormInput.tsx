import * as React from "react";
import { Input, Label, Wrapper, ErrorMsg } from "./FormInput.styled";
import { FormInputProps } from "./FormInput.types";

export const FormInput: React.FC<FormInputProps> = ({ label, ...rest }) => (
  <Wrapper direction="column">
    <Label htmlFor={label}>{label}</Label>
    <Input {...rest} />
    <ErrorMsg>{rest.error && rest.touched}</ErrorMsg>
  </Wrapper>
);
