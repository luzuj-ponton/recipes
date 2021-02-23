import styled from "styled-components";

import { NavStyledProps } from "./DrawerMenu.types";
import { Color } from "../../enums/color.enum";
import { Breakpoint } from "../../enums/breakpoint.enum";
import { rgba } from "polished";
import svg from "react-inlinesvg";
import { RedirectButton } from "../../common/ui/Button.styled";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const CloseIcon = styled(svg)`
  fill: ${rgba(`${Color.White}`, 0.4)};
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: 0.2s;
  margin: 6px;
  align-self: flex-start;
  :hover {
    fill: ${Color.White};
  }
`;

export const NavStyled = styled.nav<NavStyledProps>`
  height: 100vh;
  padding: 20px;
  background-color: ${Color.Black};
  position: fixed;
  transform: ${({ isOpen }) => (isOpen ? "transform: translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  width: 100%;
  transition: 0.3s ease-in-out;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media ${Breakpoint.MobileS} {
    width: 270px;
  }

  @media ${Breakpoint.Desktop} {
    display: none;
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`;

export const StyledLink = styled.a`
  display: block;
  cursor: pointer;
  margin: 0 3px;
`;

export const RedirectButtonStyled = styled(RedirectButton)`
  margin-bottom: 20px;
  width: 220px;
  align-self: center;
  :last-of-type {
    margin-bottom: 40px;
  }
  @media ${Breakpoint.Tablet} {
    width: 100%;
  }
`;
