import { FieldArray, FieldArrayRenderProps } from "formik";
import { Button } from "src/common/ui/Button.styled";
import {
  Input,
  DeleteItemButton,
  Label,
  InputGroupWrapper,
  InputWrapper,
  LabelWrapper,
} from "./FormArrayInput.styled";
import { FormArrayInputProps } from "./FormArrayInput.types";

export const FormArrayInput = ({ values, label, id }: FormArrayInputProps) => (
  <FieldArray name={id}>
    {({ remove, insert }: FieldArrayRenderProps) => (
      <InputGroupWrapper direction="column" justify="flex-start">
        <LabelWrapper>
          <Label htmlFor={`${id}.0`}>{label}:</Label>
          <Button variant="secondary" type="button" onClick={() => insert(values.length, "")}>
            Add
          </Button>
        </LabelWrapper>
        {values.map((item, index) => (
          <InputWrapper key={`${label}.${index}`}>
            <Input name={`${id}.${index}`} id={`${id}.${index}`} value={item} />
            <DeleteItemButton type="button" onClick={() => remove(index)}>
              X
            </DeleteItemButton>
          </InputWrapper>
        ))}
      </InputGroupWrapper>
    )}
  </FieldArray>
);
