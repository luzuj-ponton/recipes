import { Color } from "src/enums/color.enum";
import styled from "styled-components";
import { SocialsStyledProps } from "./SocialIcon.types";
import svg from "react-inlinesvg";

export const StyledIcon = styled(svg)<SocialsStyledProps>`
  width: 16px;
  height: 16px;
  fill: ${({ color }): Color => color ?? Color.Black};
  border-color: transparent;
`;

export const IconWrap = styled.a<SocialsStyledProps>`
  display: block;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 50%;
  transition: 0.2s;
  margin: 0 6px;

  border-color: ${({ color }): Color => color ?? Color.Black};
  :hover {
    background-color: ${({ color }): Color => color ?? Color.Black};
    border-color: transparent;

    ${StyledIcon} {
      fill: ${Color.White};
      transform: scale(1);
    }
  }
`;
