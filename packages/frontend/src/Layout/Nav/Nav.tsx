import React, { useState } from "react";

import { Link } from "react-router-dom";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import {
  Wrapper,
  Hamburger,
  HamburgerInner,
  DrawerMenu,
  NavItems,
  NavItem,
  Logo,
  CloseIcon,
  LogoRow,
  StyledLink,
  SocialsWrapper,
  SocialIcon,
} from "./Nav.styled";

import { Button } from "../../components/Button/Button";
import { Routes } from "../../enums/routes.enum";
import { useLocation } from "react-router-dom";
import closeIcon from "../../assets/images/close.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import githubIcon from "../../assets/images/github.svg";

const links = [
  { text: i18n.t("common:labels.home"), path: Routes.Home },
  { text: i18n.t("common:labels.add-recipe"), path: Routes.AddRecipe },
];

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <Hamburger onClick={toggleNav}>
        <HamburgerInner isOpen={isOpen} />
      </Hamburger>

      <DrawerMenu isOpen={isOpen}>
        <LogoRow>
          <Logo src="https://emoji.gg/assets/emoji/4349_honkler_clown.png" alt="honkler" />
          <CloseIcon src={closeIcon} onClick={toggleNav} />
        </LogoRow>

        <NavItems>
          {links.map((el) => {
            return (
              <NavItem key={el.path}>
                <StyledLink to={el.path} $isActive={el.path === pathname}>
                  {el.text}
                </StyledLink>
              </NavItem>
            );
          })}
        </NavItems>
        <Link to={Routes.Register}>
          <Button variant="primary">{t("common:actions.sign-up")}</Button>
        </Link>
        <SocialsWrapper>
          <SocialIcon src={linkedinIcon} />
          <SocialIcon src={facebookIcon} />
          <SocialIcon src={githubIcon} />
        </SocialsWrapper>
      </DrawerMenu>
    </Wrapper>
  );
};
