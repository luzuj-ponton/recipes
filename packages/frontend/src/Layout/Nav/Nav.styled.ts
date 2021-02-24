import styled, { css } from "styled-components";
import { Color } from "../../enums/color.enum";
import { HamburgerInnerProps, RedirectButtonStyledProps } from "./Nav.types";
import svg from "react-inlinesvg";
import { Breakpoint } from "../../enums/breakpoint.enum";
import { RedirectButton } from "../../common/ui/Button.styled";
import { zIndex } from "src/enums/zIndex.enum";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${Color.White};
  position: sticky;
  top: 0;
  left: 0;
  z-index: ${zIndex.DrawerMenu};
`;

export const Hamburger = styled.div`
  height: 20px;
  width: 20px;
  position: fixed;
  top: 38px;
  left: 16px;
  cursor: pointer;
  margin-right: 10px;

  @media ${Breakpoint.Desktop} {
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

export const NavItem = styled.li`
  text-align: center;
`;

export const RedirectButtonStyled = styled(RedirectButton)<RedirectButtonStyledProps>`
  color: ${({ $activeColor }) => ($activeColor ? `${$activeColor}` : null)};
`;

export const DesktopNavItems = styled.ul`
  display: none;
  @media ${Breakpoint.Desktop} {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    margin-left: 60px;
  }
`;

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
  margin: 30px 0 20px 0;

  @media ${Breakpoint.Desktop} {
    padding-left: 0;
  }
`;

export const ButtonsContainer = styled.div`
  display: none;
  @media ${Breakpoint.Tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const RightPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchIcon = styled(svg)`
  width: 20px;
  height: 20px;
  margin-right: 0;
  fill: ${Color.Grey};
  transition: 0.2s;
  cursor: pointer;
  :hover {
    fill: ${Color.Black};
  }
  @media ${Breakpoint.Tablet} {
    margin-right: 20px;
  }
`;
export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
