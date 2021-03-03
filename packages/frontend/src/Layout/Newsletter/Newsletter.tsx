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
import { useTranslation } from "react-i18next";

const initialValues: NewsLetterValues = {
  email: "",
};

export const Newsletter: React.FC = () => {
  const onSubmit = () => {};

  const { t } = useTranslation();

  return (
    <Wrapper>
      <ContentContainer>
        <TitleText>{t("common:labels.be-the-first")}</TitleText>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props: FormikProps<NewsLetterValues>): JSX.Element => (
            <StyledForm>
              <StyledInput
                placeholder={t("common:labels.email-placeholder")}
                {...props.getFieldMeta}
                {...props.getFieldProps}
              />
              <StyledButton variant="primary" type="submit">
                {t("common:actions.subscribe")}
              </StyledButton>
            </StyledForm>
          )}
        </Formik>
      </ContentContainer>
    </Wrapper>
  );
};
