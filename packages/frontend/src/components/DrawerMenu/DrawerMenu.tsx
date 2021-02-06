import React from "react";
import { Routes } from "src/enums/routes.enum";
import {
  CloseIcon,
  Logo,
  LogoContainer,
  NavStyled,
  SocialsWrapper,
  SocialIcon,
  NavItems,
} from "./DrawerMenu.styled";
import closeIcon from "../../assets/images/close.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import githubIcon from "../../assets/images/github.svg";
import { DrawerMenuProps } from "./DrawerMenu.types";

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ children, isOpen, onClick }) => {
  return (
    <NavStyled isOpen={isOpen}>
      <LogoContainer>
        <Logo to={Routes.Home}>Bochen</Logo>
        <CloseIcon src={closeIcon} onClick={onClick} />
      </LogoContainer>
      <NavItems>{children}</NavItems>
      <SocialsWrapper>
        <SocialIcon src={linkedinIcon} />
        <SocialIcon src={facebookIcon} />
        <SocialIcon src={githubIcon} />
      </SocialsWrapper>
    </NavStyled>
  );
};
