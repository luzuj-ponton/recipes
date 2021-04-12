import { Color } from "src/enums/color.enum";
import styled from "styled-components";
import svg from "react-inlinesvg";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import sort from "src/assets/images/sort.svg";
import { Breakpoint } from "src/enums/breakpoint.enum";

export const Select = styled.select`
  width: 180px;
  border-radius: 40px;
  appearance: none;
  color: ${Color.White};
  margin-top: 30px;
  font-size: ${FontSize.SmallS};
  font-weight: ${FontWeight.SemiBold};
  background-color: ${Color.Red};
  background-image: url(${sort});
  background-position: 95% 50%;
  background-size: 20px 20px;
  background-repeat: no-repeat;
  padding: 12px;
  border: none;
  cursor: pointer;
  option {
    background-color: ${Color.Grey};
  }
  @media ${Breakpoint.Desktop} {
    margin-top: 0;
  }
`;

export const Icon = styled(svg)`
  transform: translateY(-50%);
  fill: ${Color.White};
  height: 30px;
  width: 30px;
`;
