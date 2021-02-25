import * as React from "react";
import { RedirectButton } from "../../common/ui/Button.styled";
import {
  PageWrapper,
  AccountFooter,
  StyledLink,
  Header,
  HeroContainer,
  Text,
  AccountFormWrapper,
} from "src/components/AccountVerification/AccountVerification.styled";
import { AccountVerificationForm } from "src/components/AccountVerification/AccountVerificationForm";
import { Routes } from "src/enums/routes.enum";
import { useLogin } from "src/services/hooks/useLogin";
import { useTranslation } from "react-i18next";

export const Login: React.FC = () => {
  const { t } = useTranslation();
  const userLogin = useLogin();

  return (
    <PageWrapper>
      <AccountFormWrapper direction="column">
        <AccountVerificationForm
          onSubmit={userLogin}
          titleText={t("common:labels.log-in-account")}
          buttonText={t("common:actions.sign-in")}
        />
        <AccountFooter>
          {t("common:labels.not-registered")}
          <StyledLink to={Routes.Register}>{t("common:actions.sign-up")}</StyledLink>
        </AccountFooter>
      </AccountFormWrapper>
      <HeroContainer direction="column">
        <Header>{t("common:labels.hello-there")}</Header>
        <Text>{t("common:labels.sign-in-box-text")}</Text>
        <RedirectButton to={Routes.Register} variant="primary" width={150}>
          {t("common:actions.sign-up")}
        </RedirectButton>
      </HeroContainer>
    </PageWrapper>
  );
};
