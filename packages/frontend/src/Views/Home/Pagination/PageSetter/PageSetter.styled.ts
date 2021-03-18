import styled from "styled-components";
import svg from "react-inlinesvg";
import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import { PageNumberTypes } from "./PageSetter.types";
import { Button } from "src/common/ui/Button.styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArrowIcon = styled(svg)`
  fill: ${Color.Silver};
  height: 12px;
  width: 12px;
  cursor: pointer;
  transition: 0.2s;
  :first-of-type {
    transform: rotate(180deg);
  }
  :hover {
    fill: ${Color.Black};
  }
`;

export const PageNumber = styled(Button)<PageNumberTypes>`
  font-size: ${FontSize.SmallM};
  font-weight: ${FontWeight.Medium};
  padding: 6px 14px;
  color: ${({ activeColor }) => (activeColor ? `${activeColor}` : Color.Silver)};

  cursor: pointer;
  :first-of-type {
    margin-left: 20px;
  }
  :last-of-type {
    margin-right: 20px;
  }
  :hover {
    color: ${Color.Black};
  }
`;
