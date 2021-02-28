import React from "react";
import { Routes } from "src/enums/routes.enum";
import {
  CloseIcon,
  LogoContainer,
  NavStyled,
  NavItems,
  StyledRedirectButton,
  SocialsWrapper,
  StyledLink,
  Icon,
} from "./DrawerMenu.styled";
import closeIcon from "../../assets/images/close.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import githubIcon from "../../assets/images/github.svg";
import { DrawerMenuProps } from "./DrawerMenu.types";
import { useTranslation } from "react-i18next";
import { Logo } from "../../common/ui/Logo.styled";

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ children, isOpen, onClick }) => {
  const { t } = useTranslation();

  return (
    <NavStyled isOpen={isOpen}>
      <LogoContainer>
        <Logo $isDrawerMenuLogo to={Routes.Home}>
          Bochen
        </Logo>
        <CloseIcon src={closeIcon} onClick={onClick} />
      </LogoContainer>
      <NavItems>{children}</NavItems>
      <StyledRedirectButton to={Routes.Register} variant="primary">
        {t("common:actions.sign-up")}
      </StyledRedirectButton>
      <StyledRedirectButton to={Routes.Login} variant="primary">
        {t("common:actions.sign-in")}
      </StyledRedirectButton>
      <SocialsWrapper>
        <StyledLink href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
          <Icon src={linkedinIcon} />
        </StyledLink>
        <StyledLink>
          <Icon src={facebookIcon} />
        </StyledLink>
        <StyledLink>
          <Icon src={githubIcon} />
        </StyledLink>
      </SocialsWrapper>
    </NavStyled>
  );
};
