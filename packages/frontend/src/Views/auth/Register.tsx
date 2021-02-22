import * as React from "react";
import { AccountVerificationForm } from "src/components/AccountVerification/AccountVerificationForm";
import { Routes } from "src/enums/routes.enum";
import {
  AccountFooter,
  StyledLink,
  PageWrapper,
  HeroContainer,
  Text,
  Header,
  AccountFormWrapper,
} from "src/components/AccountVerification/AccountVerification.styled";
import { RedirectButton } from "src/common/ui/Button.styled";
import { IAuthCredentials } from "../../../../shared/src/types/auth.type";
import { useMutation } from "react-query";
import { registerUser } from "src/services/authServices";

export const Register: React.FC = () => {
  const mutation = useMutation(registerUser);
  const onSubmit = (variables: IAuthCredentials) => mutation.mutate(variables);
  return (
    <PageWrapper direction="row">
      <AccountFormWrapper direction="column">
        <AccountVerificationForm
          onSubmit={onSubmit}
          titleText="Create an Account"
          buttonText="Sign up"
        />
        <AccountFooter>
          Already have account? <StyledLink to={Routes.Login}>Sign in</StyledLink>
        </AccountFooter>
      </AccountFormWrapper>
      <HeroContainer direction="column">
        <Header>Welcome Back</Header>
        <Text>Already signed up, enter your details and start cooking your first meal today</Text>
        <RedirectButton to={Routes.Login} variant="primary" width={150}>
          Sign in
        </RedirectButton>
      </HeroContainer>
    </PageWrapper>
  );
};
