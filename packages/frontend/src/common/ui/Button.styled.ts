import styled, { css } from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";
import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "../../enums/fontweight.enum";

type ButtonVariants = "primary" | "secondary" | "tertiary" | "quaternary";

interface StyledButtonProps {
  width?: number;
  variant: ButtonVariants;
  $isActive?: boolean;
}

const ButtonStyles = {
  primary: css`
    font-weight: ${FontWeight.Medium};
    background-color: ${Color.White};
    color: ${Color.Grey};
    :hover {
      background-color: ${darken(0.05, Color.White)};
    }
    :active {
      background-color: ${darken(0.1, Color.White)};
    }
  `,
  secondary: css`
    font-weight: ${FontWeight.SemiBold};
    background-color: ${Color.Red};
    color: ${Color.White};
    :hover {
      background-color: ${darken(0.05, Color.Red)};
    }
    :active {
      background-color: ${darken(0.1, Color.Red)};
    }
  `,
  tertiary: css`
    font-size: ${FontSize.Medium};
    color: ${Color.Grey};
    :hover {
      color: ${Color.White};
    }
  `,
  quaternary: css`
    font-weight: ${FontWeight.Medium};
    color: ${Color.Grey};
    :hover {
      color: ${Color.Red};
    }
  `,
};

const getSharedStyles = (width?: number) => css`
  font-size: ${FontSize.SmallS};
  border-radius: 30px;
  padding: 10px 30px;
  cursor: pointer;
  text-align: center;
  transition: 0.2s;
  width: ${width ? `${width}px` : "auto"};
`;

export const RedirectButton = styled(Link)<StyledButtonProps>`
  ${({ width }) => getSharedStyles(width)};
  ${({ variant }) => ButtonStyles[variant]}
  display: block;
`;

export const Button = styled.button<StyledButtonProps>`
  ${({ width }) => getSharedStyles(width)};
  ${({ variant }) => ButtonStyles[variant]}
  :disabled {
    background-color: ${Color.Grey};
  }
`;
