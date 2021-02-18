import { darken } from "polished";
import { Link } from "react-router-dom";
import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import styled, { css } from "styled-components";
import { ButtonProps, RedirectButtonProps } from "./common.types";

export const RedirectButton = styled(Link)<RedirectButtonProps>`
  font-size: ${FontSize.Small};
  border-radius: 30px;
  padding: 10px 30px;
  cursor: pointer;
  font-weight: ${FontWeight.Bold};
  text-align: center;
  width: ${({ width }): string => (width ? `${width}px` : "auto")};
  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${Color.White};
          color: ${Color.Grey};
          :hover {
            background-color: ${darken(0.05, Color.White)};
          }
          :active {
            background-color: ${darken(0.1, Color.White)};
          }
        `;
      case "secondary":
        return css`
          background-color: ${Color.Red};
          color: ${Color.White};
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

export const Button = styled.button<ButtonProps>`
  font-size: ${FontSize.Small};
  border-radius: 30px;
  padding: 10px 30px;
  cursor: pointer;
  margin: 20px 0;
  font-weight: ${FontWeight.Bold};
  width: ${({ width }): string => (width ? `${width}px` : "100%")};

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${Color.White};
          color: ${Color.Grey};
          :hover {
            background-color: ${darken(0.05, Color.White)};
          }
          :active {
            background-color: ${darken(0.1, Color.White)};
          }
        `;
      case "secondary":
        return css`
          background-color: ${Color.Red};
          color: ${Color.White};
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
