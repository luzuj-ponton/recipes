import { Step } from "@shared/src/types/recipe.type";
import { FieldArray, FieldArrayRenderProps } from "formik";
import React from "react";
import { Button } from "src/common/ui/Button.styled";
import { Label, LabelWrapper, InputGroupWrapper } from "../FormArrayInput/FormArrayInput.styled";
import { InputsWrapper, Input, InputWrapper, StepTitle } from "./AddStep.styled";
import { AddStepProps } from "./AddStep.type";

const defaultStep: Step = {
  title: "",
  description: "",
};

export const AddStep: React.FC<AddStepProps> = ({ values }) => {
  return (
    <FieldArray name="steps">
      {({ remove, insert }: FieldArrayRenderProps) => (
        <InputGroupWrapper direction="column" justify="flex-start">
          <LabelWrapper>
            <Label htmlFor={`steps.0`}>Steps:</Label>
            <Button
              variant="secondary"
              type="button"
              onClick={() => insert(values.length, defaultStep)}
            >
              Add
            </Button>
          </LabelWrapper>
          {values.map((item, index) => (
            <InputsWrapper key={`$steps.${index}`}>
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
