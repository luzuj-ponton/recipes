import React from "react";

import {
  Wrapper,
  TitleText,
  StyledForm,
  StyledButton,
  StyledInput,
  ContentContainer,
} from "./Newsletter.styled";
import { Formik, FormikProps } from "formik";
import { NewsLetterValues } from "./Newsletter.types";

const initialValues = {
  email: "",
};

export const Newsletter = () => {
  const onSubmit = () => {
    console.log("ok");
  };
  return (
    <Wrapper>
      <ContentContainer>
        <TitleText>
          Be the first to know about the latest deals, receive new trending recipes & more!
        </TitleText>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props: FormikProps<NewsLetterValues>): JSX.Element => (
            <StyledForm>
              <StyledInput
                placeholder="Email Address"
                {...props.getFieldMeta}
                {...props.getFieldProps}
              />
              <StyledButton variant="primary" type="submit">
                Subscribe
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </ContentContainer>
    </Wrapper>
  );
};
