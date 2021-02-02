import styled, { css } from "styled-components";
import { Color } from "../../enums/color.enum";
import { FontSize } from "../../enums/fontsize.enum";
import { HamburgerInnerProps, DrawerMenuProps, LinkProps } from "./Nav.types";
import svg from "react-inlinesvg";
import { Link } from "react-router-dom";
import { rgba } from "polished";

export const Wrapper = styled.div`
  display: flex;
`;
export const Hamburger = styled.div`
  height: 20px;
  width: 20px;
  padding: 5px;
  position: relative;
  cursor: pointer;
`;

export const HamburgerInner = styled.span<HamburgerInnerProps>`
  position: absolute;
  height: 2px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${Color.Grey};
  transition: transform 220ms ease-in-out;

  :after {
    top: -6px;
    transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
  }

  :before {
    bottom: -6px;
    transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
  }
  :after,
  :before {
    content: "";
    height: 2px;
    display: block;
    position: absolute;
    background-color: ${Color.Grey};
    width: 100%;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(225deg);
      transition: transform 220ms 120ms ease-in-out;
      :after {
        top: 0;
        transition: top 100ms ease-out;
      }
      :before {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 100ms ease-out, transform 220ms 120ms ease-in-out;
      }
    `}
`;

export const DrawerMenu = styled.nav<DrawerMenuProps>`
  height: 100vh;
  padding: 20px;
  background-color: ${Color.Black};
  position: fixed;
  right: -40%;
  top: 0;
  width: 270px;
  transition: 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      top: 0;
      right: 0;
    `}
`;

export const Logo = styled.img`
  border-radius: 50%;
  width: 36px;
  height: 36px;
`;
export const CloseIcon = styled(svg)`
  fill: ${rgba(`${Color.White}`, 0.4)};
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    fill: ${Color.White};
  }
`;

export const LogoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
export const NavItem = styled.li`
  text-align: center;
`;

export const StyledLink = styled(Link)<LinkProps>`
  display: block;
  font-size: ${FontSize.Medium};
  color: ${({ isActive }) => (isActive ? `${Color.White}` : `${rgba(`${Color.White}`, 0.4)}`)};
  padding: 8px 0;
  transition: 0.2s;
  :hover {
    color: ${Color.White};
    font-size: ${FontSize.Medium};
  }
`;

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  margin-top: 40px;
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
