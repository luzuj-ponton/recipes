import * as React from "react";
import { AccountVerificationForm } from "src/components/AccountVerification/AccountVerificationForm";
import { Routes } from "src/enums/routes.enum";
import {
  AccountFooter,
  StyledkLink,
  PageWrapper,
  HeroContainer,
  Text,
  Header,
  AccountFormWrapper,
} from "src/components/AccountVerification/AccountVerification.styled";
import { RedirectButton } from "src/common/common.styled";

export const Register: React.FC = () => {
  const onSubmit = () => {};
  return (
    <PageWrapper direction="row">
      <AccountFormWrapper direction="column">
        <AccountVerificationForm
          onSubmit={onSubmit}
          titleText="Create an Account"
          buttonText="Sign up"
        />
        <AccountFooter>
          Already have account? <StyledkLink to={Routes.Login}>Sign in</StyledkLink>
        </AccountFooter>
      </AccountFormWrapper>
      <HeroContainer direction="column">
        <Header>Welcome Back</Header>
        <Text>Already signed up, enter your details and start cooking your first meal today</Text>
        <RedirectButton to={Routes.Login} variant="primary" width="150px">
          Sign in
        </RedirectButton>
      </HeroContainer>
    </PageWrapper>
  );
};
