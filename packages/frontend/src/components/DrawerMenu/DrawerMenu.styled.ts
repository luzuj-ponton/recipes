import styled from "styled-components";

import { NavStyledProps } from "./DrawerMenu.types";
import { Color } from "../../enums/color.enum";
import { Breakpoint } from "../../enums/breakpoint.enum";
import { Link } from "react-router-dom";
import { rgba } from "polished";
import { FontSize } from "../../enums/fontsize.enum";
import svg from "react-inlinesvg";

export const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Logo = styled(Link)`
  font-size: ${FontSize.MediumL};
  color: ${Color.White};
  font-family: "Leckerli One", cursive;
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

  @media ${Breakpoint.Tablet} {
    display: none;
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-top: 40px;
  align-self: center;
`;

export const SocialIcon = styled(svg)`
  width: 20px;
  height: 20px;
  fill: ${rgba(`${Color.White}`, 0.4)};
  transition: 0.2s;
  cursor: pointer;
  :hover {
    fill: ${Color.White};
    transform: scale(1.1);
  }
`;
