import React from "react";

import {
  ContentWrapper,
  Heading,
  Wrapper,
  Text,
  StyledRedirectButton,
  ButtonWrapper,
  Arrow,
} from "./Hero.styled";
import arrow from "../../assets/images/rightarrow.svg";
import { useTranslation } from "react-i18next";
import { Routes } from "../../enums/routes.enum";

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>{t("common:labels.heading-title")}</Heading>
        <Text>{t("common:labels.heading-text")}</Text>
        <ButtonWrapper>
          <StyledRedirectButton variant="tertiary" to={Routes.Register}>
            {t("common:labels.heading-signup")}
          </StyledRedirectButton>
          <Arrow src={arrow} />
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
