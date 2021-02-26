import * as React from "react";
import { Input, Label, Wrapper, ErrorMsg } from "./FormInput.styled";
import { FormInputProps } from "./FormInput.types";
import { Collapse } from "react-collapse";
export const FormInput: React.FC<FormInputProps> = ({ label, ...rest }) => {
  return (
    <Wrapper direction="column">
      <Label htmlFor={label}>{label}</Label>
      <Input {...rest} id={label} />
      <Collapse isOpened={Boolean(rest.touched && rest.error)}>
        <span>
          <ErrorMsg>{rest.error}</ErrorMsg>
        </span>
      </Collapse>
    </Wrapper>
  );
};
