import { IRecipe, Step } from "@shared/src/types/recipe.type";
import { FieldArray, FieldArrayRenderProps, useFormikContext } from "formik";
import React from "react";
import { Button } from "src/common/ui/Button.styled";
import { Label, LabelWrapper, InputGroupWrapper } from "../../FormArrayInput/FormArrayInput.styled";
import { InputsWrapper, Input, InputWrapper, StepTitle } from "./AddStep.styled";

const defaultStep: Step = {
  title: "",
  description: "",
};

export const AddStep: React.FC = () => {
  const {
    values: { steps },
  } = useFormikContext<IRecipe>();
  return (
    <FieldArray name="steps">
      {({ remove, insert }: FieldArrayRenderProps) => (
        <InputGroupWrapper direction="column" justify="flex-start">
          <LabelWrapper>
            <Label htmlFor={`steps.0`}>Steps:</Label>
            <Button
              variant="secondary"
              type="button"
              onClick={() => insert(steps.length, defaultStep)}
            >
              Add
            </Button>
          </LabelWrapper>
          {steps.map((item, index) => (
            <InputsWrapper key={`$steps.${item.title}`}>
              <StepTitle>Step. {index + 1}</StepTitle>
              <Input
                name={`steps.${index}.title`}
                id={`steps.${index}`}
                placeholder="title"
                value={item.title}
              />
              <InputWrapper>
                <Input
                  name={`steps.${index}.description`}
                  placeholder="description"
                  value={item.description}
                />
                <Button variant="secondary" type="button" onClick={() => remove(index)} width={160}>
                  Delete step
                </Button>
              </InputWrapper>
            </InputsWrapper>
          ))}
        </InputGroupWrapper>
      )}
    </FieldArray>
  );
};
