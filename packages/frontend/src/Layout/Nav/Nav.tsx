import React, { useState } from "react";

import { Link } from "react-router-dom";
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
  HeaderStyled,
  ButtonsWrapper,
  SearchIcon,
  DesktopMenu,
  DesktopNavItems,
} from "./Nav.styled";
import { Button } from "../../components/Button/Button";
import { Routes } from "../../enums/routes.enum";
import { useLocation } from "react-router-dom";
import { ClickOutside } from "../../components/ClickOutside/ClickOutside";
import closeIcon from "../../assets/images/close.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import githubIcon from "../../assets/images/github.svg";
import searchIcon from "../../assets/images/loupe.svg";

const links = [
  { text: "Home", path: Routes.Home },
  { text: "Add recipe", path: Routes.AddRecipe },
];

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { pathname } = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <HeaderStyled>
        <DesktopMenu>
          <Logo to={Routes.Home}>Bochen</Logo>
          <DesktopNavItems>
            {links.map((el) => {
              return (
                <NavItem key={el.path}>
                  <StyledLink $isDesktop to={el.path} $isActive={el.path === pathname}>
                    {el.text}
                  </StyledLink>
                </NavItem>
              );
            })}
          </DesktopNavItems>
        </DesktopMenu>
        <ButtonsWrapper>
          <SearchIcon src={searchIcon} />
          <StyledLink $isDesktop to={Routes.Login}>
            Sign in
          </StyledLink>
          <Link to={Routes.Register}>
            <Button variant="secondary">Sign up</Button>
          </Link>
        </ButtonsWrapper>
      </HeaderStyled>
      <ClickOutside onClickOutside={() => setIsOpen(false)}>
        <Hamburger onClick={toggleNav}>
          <HamburgerInner isOpen={isOpen} />
        </Hamburger>
        <DrawerMenu isOpen={isOpen}>
          <LogoRow>
            <Logo $isDrawerMenuLogo to={Routes.Home}>
              Bochen
            </Logo>
            <CloseIcon src={closeIcon} onClick={toggleNav} />
          </LogoRow>

          <NavItems>
            {links.map((el) => {
              return (
                <NavItem key={el.path}>
                  <StyledLink onClick={toggleNav} to={el.path} $isActive={el.path === pathname}>
                    {el.text}
                  </StyledLink>
                </NavItem>
              );
            })}
          </NavItems>
          <Link to={Routes.Register}>
            <Button variant="primary">Sign up</Button>
          </Link>
          <SocialsWrapper>
            <SocialIcon src={linkedinIcon} />
            <SocialIcon src={facebookIcon} />
            <SocialIcon src={githubIcon} />
          </SocialsWrapper>
        </DrawerMenu>
      </ClickOutside>
    </Wrapper>
  );
};
