import { FieldArray, FieldArrayRenderProps } from "formik";
import React from "react";
import { Button } from "src/common/ui/Button.styled";
import { FlexContainer } from "../Containers/Containers.styles";
import {
  Input,
  DeleteItemButton,
  Label,
  InputGroupWrapper,
  InputWrapper,
} from "./FormArrayInput.styled";
import { FormArrayInputProps } from "./FormArrayInput.types";

export function FormArrayInput<Value>(props: FormArrayInputProps<Value>) {
  const { values, label, id } = props;
  return (
    <FieldArray name={id}>
      {({ remove, insert }: FieldArrayRenderProps) => (
        <InputGroupWrapper direction="column">
          <FlexContainer>
            <Label htmlFor={id}>{label}</Label>
            <Button variant="secondary" type="button" onClick={() => insert(values.length, "")}>
              Add
            </Button>
          </FlexContainer>
          {values.map((item, index) => (
            <InputWrapper key={`${id}.${index}`}>
              <Input name={`${id}.${index}`} id={id} value={item} />
              <DeleteItemButton type="button" onClick={() => remove(index)}>
                X
              </DeleteItemButton>
            </InputWrapper>
          ))}
        </InputGroupWrapper>
      )}
    </FieldArray>
  );
}
