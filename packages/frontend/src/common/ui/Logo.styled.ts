import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";

interface LogoProps {
  $isBig?: boolean;
  $isDrawerMenuLogo?: boolean;
}

export const Logo = styled(Link)<LogoProps>`
  font-size: ${({ $isBig }) => ($isBig ? `${FontSize.BigL}` : `${FontSize.MediumL}`)};
  color: ${({ $isDrawerMenuLogo }) => ($isDrawerMenuLogo ? `${Color.White}` : `${Color.Red}`)};
  font-family: "Leckerli One", cursive;
`;
