import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Wrapper,
  Hamburger,
  HamburgerInner,
  NavItem,
  HeaderStyled,
  ButtonsContainer,
  RightPanel,
  SearchIcon,
  DesktopMenu,
  DesktopNavItems,
  RedirectButtonStyled,
} from "./Nav.styled";

import { Routes } from "../../enums/routes.enum";
import { ClickOutside } from "../../components/ClickOutside/ClickOutside";
import searchIcon from "../../assets/images/loupe.svg";
import { RouteInfo } from "src/types/RouteInfo.types";
import { routes } from "src/config/Routes";
import { Button, RedirectButton } from "../../common/ui/Button.styled";
import { DrawerMenu } from "src/components/DrawerMenu/DrawerMenu";
import { Logo } from "../../common/ui/Logo.styled";
import { Color } from "../../enums/color.enum";
import { StorageKeys } from "src/enums/storageKeys.enum";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { configureApi } from "../../services";

export const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const [token, setToken] = useLocalStorage(StorageKeys.Token);
  const { t } = useTranslation();

  const toggleNav = () => setIsOpen(!isOpen);

  const onLogoutClick = () => {
    configureApi(null);
    setToken(null);
  };

  return (
    <Wrapper>
      <HeaderStyled>
        <DesktopMenu>
          <Logo to={Routes.Home}>Bochen</Logo>
          <DesktopNavItems>
            {routes.map(({ path, text }: RouteInfo) => (
              <NavItem key={path}>
                <RedirectButtonStyled
                  $activeColor={path === pathname ? `${Color.Red}` : null}
                  variant="quaternary"
                  to={path}
                >
                  {text}
                </RedirectButtonStyled>
              </NavItem>
            ))}
          </DesktopNavItems>
        </DesktopMenu>
        <RightPanel>
          <SearchIcon src={searchIcon} />
          {!token ? (
            <ButtonsContainer>
              <RedirectButton variant="quaternary" to={Routes.Login}>
                {t("common:actions.sign-in")}
              </RedirectButton>
              <RedirectButton to={Routes.Register} variant="secondary">
                {t("common:actions.sign-up")}
              </RedirectButton>
            </ButtonsContainer>
          ) : (
            <ButtonsContainer>
              <Button onClick={onLogoutClick} variant="secondary">
                {t("common:actions.logout")}
              </Button>
            </ButtonsContainer>
          )}
        </RightPanel>
      </HeaderStyled>
      <ClickOutside onClickOutside={() => setIsOpen(false)}>
        <Hamburger onClick={toggleNav}>
          <HamburgerInner isOpen={isOpen} />
        </Hamburger>
        <DrawerMenu isOpen={isOpen} onClick={toggleNav}>
          {routes.map(({ path, text }: RouteInfo) => (
            <NavItem key={path}>
              <RedirectButtonStyled
                variant="tertiary"
                onClick={toggleNav}
                to={path}
                $activeColor={path === pathname ? `${Color.LightGrey}` : null}
              >
                {text}
              </RedirectButtonStyled>
            </NavItem>
          ))}
        </DrawerMenu>
      </ClickOutside>
    </Wrapper>
  );
};
