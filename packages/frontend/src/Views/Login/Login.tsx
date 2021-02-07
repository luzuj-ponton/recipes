import * as React from "react";
import { RedirectButton } from "src/common/common.styled";
import {
  PageWrapper,
  AccountFooter,
  StyledkLink,
  Header,
  HeroContainer,
  Text,
  AccountFormWrapper,
} from "src/components/AccountVerification/AccountVerification.styled";
import { AccountVerificationForm } from "src/components/AccountVerification/AccountVerificationForm";
import { Routes } from "src/enums/routes.enum";

export const Login: React.FC = () => {
  const onSubmit = () => {};
  return (
    <PageWrapper direction="row">
      <AccountFormWrapper direction="column">
        <AccountVerificationForm
          onSubmit={onSubmit}
          titleText="Log in to your account"
          buttonText="Sign in"
        />
        <AccountFooter>
          Not registered yet? <StyledkLink to={Routes.Register}>Sign up</StyledkLink>
        </AccountFooter>
      </AccountFormWrapper>
      <HeroContainer direction="column">
        <Header>Hello There, Join Us</Header>
        <Text>Enter your personal details and join the cooking community</Text>
        <RedirectButton to={Routes.Register} variant="primary" width="150px">
          Sign up
        </RedirectButton>
      </HeroContainer>
    </PageWrapper>
  );
};
