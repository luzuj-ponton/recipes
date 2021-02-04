import styled, { css } from "styled-components";
import { FontSize } from "../../enums/fontsize.enum";
import { Color } from "../../enums/color.enum";
import { StyledButtonProps } from "./Button.types";
import { Breakpoint } from "../../enums/breakpoint.enum";
import { darken } from "polished";

export const StyledButton = styled.button<StyledButtonProps>`
  font-size: ${FontSize.SmallS};
  border-radius: 30px;
  padding: 10px 30px;
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${Color.White};
          color: ${Color.Grey};
          width: 70%;
          :hover {
            background-color: ${darken(0.05, Color.White)};
          }
          :active {
            background-color: ${darken(0.1, Color.White)};
          }
          @media ${Breakpoint.MobileS} {
            width: 100%;
          }
        `;
      case "secondary":
        return css`
          background-color: ${Color.Red};
          color: ${Color.White};
          font-weight: 500;
          width: auto;
          transition: 0.1s;
          :hover {
            background-color: ${darken(0.05, Color.Red)};
          }
          :active {
            background-color: ${darken(0.1, Color.Red)};
          }
        `;
    }
  }}
`;
