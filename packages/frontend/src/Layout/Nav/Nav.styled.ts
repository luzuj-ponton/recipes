import styled, { css } from "styled-components";
import { Color } from "../../enums/color.enum";
import { FontSize } from "../../enums/fontsize.enum";
import { HamburgerInnerProps, LinkProps } from "./Nav.types";
import svg from "react-inlinesvg";
import { Link } from "react-router-dom";
import { rgba } from "polished";
import { Breakpoint } from "../../enums/breakpoint.enum";
import { FontWeight } from "../../enums/fontweight.enum";

export const Wrapper = styled.div`
  display: flex;
`;

export const Hamburger = styled.div`
  height: 20px;
  width: 20px;
  position: fixed;
  top: 46px;
  left: 16px;
  cursor: pointer;
  margin-right: 10px;

  @media ${Breakpoint.Tablet} {
    display: none;
  }
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

export const Logo = styled(Link)`
  font-size: ${FontSize.MediumL};
  color: ${Color.Red};
  font-family: "Leckerli One", cursive;
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

export const DesktopNavItems = styled.ul`
  display: none;
  @media ${Breakpoint.Tablet} {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    margin-left: 60px;
    list-style: none;
  }
`;

export const StyledLink = styled(Link)<LinkProps>`
  display: ${({ $isDesktop }) => ($isDesktop ? "none" : "block")};
  font-size: ${FontSize.Medium};
  color: ${({ $isActive }) => ($isActive ? `${Color.White}` : `${rgba(`${Color.White}`, 0.4)}`)};
  padding: 8px 0;
  transition: color 0.2s;
  :hover {
    color: ${Color.White};
  }

  @media ${Breakpoint.Tablet} {
    display: block;
    color: ${({ $isActive }) => ($isActive ? `${Color.Red}` : Color.Grey)};
    font-weight: ${FontWeight.Medium};
    font-size: ${FontSize.SmallS};
    padding: 15px;

    :hover {
      color: ${Color.Red};
    }
  }
`;

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;
  padding-left: 16px;

  @media ${Breakpoint.Tablet} {
    padding-left: 0;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${StyledLink} {
    margin-right: 14px;
  }
`;

export const SearchIcon = styled(svg)`
  width: 20px;
  height: 20px;
  margin-right: 30px;
  fill: ${Color.Grey};
  transition: 0.2s;
  cursor: pointer;
  :hover {
    fill: ${Color.Black};
  }
`;
export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${Breakpoint.Desktop} {
    display: flex;
  }
`;
