import styled from "styled-components";
import svg from "react-inlinesvg";
import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import { PageNumberTypes } from "./PageSetter.types";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
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

export const PageNumber = styled.div<PageNumberTypes>`
  font-size: ${FontSize.SmallM};
  font-weight: ${FontWeight.Medium};
  margin: 0 10px;
  color: ${({ activeColor }) => (activeColor ? `${activeColor}` : Color.Silver)};
  transition: 0.2s;
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
