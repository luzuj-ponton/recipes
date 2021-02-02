import styled, { css } from "styled-components";
import { FontSize } from "../../enums/fontsize.enum";
import { Color } from "../../enums/color.enum";
import { ButtonVariants } from "./Button.types";

export const StyledButton = styled.button<{ variant: ButtonVariants }>`
  font-size: ${FontSize.SmallS};
  border: none;
  border-radius: 500px;
  outline: none;
  padding: 10px 30px;
  cursor: pointer;

  ${({ variant }) => {
    switch (variant) {
      case "primary":
        return css`
          background-color: ${Color.White};
          color: ${Color.Grey};
          width: 100%;
        `;
      case "secondary":
        return css``;
    }
  }}
`;
