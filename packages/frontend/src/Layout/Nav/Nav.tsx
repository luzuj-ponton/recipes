import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  Wrapper,
  Hamburger,
  HamburgerInner,
  NavItem,
  Logo,
  StyledLink,
  HeaderStyled,
  ButtonsWrapper,
  SearchIcon,
  DesktopMenu,
  DesktopNavItems,
} from "./Nav.styled";
import { DrawerMenu } from "../../components/DrawerMenu/DrawerMenu";
import { Button } from "../../components/Button/Button";
import { Routes } from "../../enums/routes.enum";
import { useLocation } from "react-router-dom";
import { ClickOutside } from "../../components/ClickOutside/ClickOutside";
import searchIcon from "../../assets/images/loupe.svg";
import { RouteInfo } from "src/types/RouteInfo.types";
import { routes } from "src/config/Routes";

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
            {routes.map(({ path, text }: RouteInfo) => (
              <NavItem key={path}>
                <StyledLink $isDesktop to={path} $isActive={path === pathname}>
                  {text}
                </StyledLink>
              </NavItem>
            ))}
          </DesktopNavItems>
        </DesktopMenu>
        <ButtonsWrapper>
          <SearchIcon src={searchIcon} />
          <StyledLink $isActive={pathname === Routes.Register} $isDesktop to={Routes.Login}>
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
        <DrawerMenu isOpen={isOpen} onClick={toggleNav}>
          {routes.map(({ path, text }: RouteInfo) => (
            <NavItem key={path}>
              <StyledLink onClick={toggleNav} to={path} $isActive={path === pathname}>
                {text}
              </StyledLink>
            </NavItem>
          ))}

          <Link to={Routes.Register}>
            <Button variant="primary">Sign up</Button>
          </Link>
        </DrawerMenu>
      </ClickOutside>
    </Wrapper>
  );
};
