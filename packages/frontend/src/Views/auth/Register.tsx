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
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Register: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const mutation = useMutation(registerUser, {
    onSuccess: () => history.push(Routes.Login),
  });
  const onRegister = (variables: IAuthCredentials) => mutation.mutate(variables);
  return (
    <PageWrapper direction="row">
      <AccountFormWrapper direction="column">
        <AccountVerificationForm
          onSubmit={onRegister}
          titleText={t("common:labels.create-account")}
          buttonText={t("common:actions.sign-up")}
        />
        <AccountFooter>
          {t("common:labels.already-have-account")}
          <StyledLink to={Routes.Login}>{t("common:actions.sign-in")}</StyledLink>
        </AccountFooter>
      </AccountFormWrapper>
      <HeroContainer direction="column">
        <Header>{t("common:labels.welcome-back")}</Header>
        <Text>{t("common:labels.sign-up-box-text")}</Text>
        <RedirectButton to={Routes.Login} variant="primary" width={150}>
          {t("common:actions.sign-in")}
        </RedirectButton>
      </HeroContainer>
    </PageWrapper>
  );
};
