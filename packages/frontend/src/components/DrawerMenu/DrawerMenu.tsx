import React from "react";
import { Routes } from "src/enums/routes.enum";
import {
  CloseIcon,
  LogoContainer,
  NavStyled,
  NavItems,
  RedirectButtonStyled,
  SocialsWrapper,
  StyledLink,
  StyledIcon,
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
      <RedirectButtonStyled to={Routes.Register} variant="primary">
        {t("common:actions.sign-up")}
      </RedirectButtonStyled>
      <RedirectButtonStyled to={Routes.Login} variant="primary">
        {t("common:actions.sign-in")}
      </RedirectButtonStyled>
      <SocialsWrapper>
        <StyledLink href="https://www.linkedin.com/feed/" rel="noopener noreferrer" target="_blank">
          <StyledIcon src={linkedinIcon} />
        </StyledLink>
        <StyledLink>
          <StyledIcon src={facebookIcon} />
        </StyledLink>
        <StyledLink>
          <StyledIcon src={githubIcon} />
        </StyledLink>
      </SocialsWrapper>
    </NavStyled>
  );
};
