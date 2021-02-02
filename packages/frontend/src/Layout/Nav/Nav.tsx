import React, { useState } from "react";

import { Link } from "react-router-dom";
import { NavProps } from "./Nav.types";
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

export const Nav: React.FC<NavProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const { pathname } = useLocation();

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
          <NavItem>
            <StyledLink to={Routes.Home} isActive={pathname === Routes.Home}>
              Home
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to={Routes.AddRecipe} isActive={pathname === Routes.AddRecipe}>
              Add recipe
            </StyledLink>
          </NavItem>
        </NavItems>
        <Link to={Routes.Register}>
          <Button variant="primary" text="Sign Up" />
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
