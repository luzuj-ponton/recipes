import * as React from "react";
import { Routes } from "src/enums/routes.enum";
import { StyledForm, Title, IconsWrapper } from "./AccountVerification.styled";
import { Formik, FormikProps } from "formik";
import { FormInput } from "src/components/FormInput/FormInput";
import { accountValidationSchema } from "./validationSchema";
import {
  AccountVerificationsValues,
  IAccountVerificationFormProps,
} from "./AccountVerification.types";
import { Button } from "../../common/ui/Button.styled";
import { FlexContainer } from "../Containers/Containers.styles";
import { Logo } from "../../common/ui/Logo.styled";
import { Socials } from "../Socials/Socials";
import i18n from "../../i18n";

const initialValues: AccountVerificationsValues = {
  email: "",
  password: "",
};

const accountFormData = [
  { label: "Email", key: "email" },
  { label: i18n.t("common:labels.password"), key: "password" },
];

export const AccountVerificationForm: React.FC<IAccountVerificationFormProps> = ({
  onSubmit,
  buttonText,
  titleText,
}) => {
  return (
    <FlexContainer direction="column">
      <Logo $isBig to={Routes.Home}>
        Bochen
      </Logo>
      <IconsWrapper direction="row">
        <Socials />
      </IconsWrapper>

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
