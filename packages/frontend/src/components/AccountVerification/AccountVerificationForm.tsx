import * as React from "react";
import { Routes } from "src/enums/routes.enum";
import { Logo, StyledForm, Title } from "./AccountVerification.styled";
import { Formik, FormikProps } from "formik";
import { FormInput } from "src/components/FormInput/FormInput";
import { accountValidationSchema } from "./validationSchema";
import {
  AccountVerificationsValues,
  IAccountVerificationFormProps,
} from "./AccountVerification.types";
import { Button } from "src/common/common.styled";
import { FlexContainer } from "../Containers/Containers.styles";

const initialValues: AccountVerificationsValues = {
  email: "",
  password: "",
};

const accountFormData = [
  { label: "Email", key: "email" },
  { label: "Password", key: "password" },
];

export const AccountVerificationForm: React.FC<IAccountVerificationFormProps> = ({
  onSubmit,
  buttonText,
  titleText,
}) => {
  return (
    <FlexContainer direction="column">
      <Logo to={Routes.Home}>Bochen</Logo>
      <Title>{titleText}</Title>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={accountValidationSchema}
      >
        {(props: FormikProps<AccountVerificationsValues>): JSX.Element => (
          <StyledForm>
            {accountFormData.map(
              ({ key, label }): JSX.Element => (
                <FormInput
                  key={key}
                  label={label}
                  {...props.getFieldProps(key)}
                  {...props.getFieldMeta(key)}
                />
              ),
            )}
            <Button variant="secondary" type="submit" width={200}>
              {buttonText}
            </Button>
          </StyledForm>
        )}
      </Formik>
    </FlexContainer>
  );
};
