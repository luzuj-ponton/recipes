import styled from "styled-components";

import svg from "react-inlinesvg";
import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { rgba } from "polished";
import { Breakpoint } from "src/enums/breakpoint.enum";

export const Wrapper = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  @media ${Breakpoint.Desktop} {
    flex-basis: 65%;
  }
`;

export const Icon = styled(svg)`
  position: absolute;
  height: 20px;
  width: 20px;
  left: 18px;
  top: 16px;
`;

export const StyledInput = styled.input`
  padding: 14px 8px 14px 50px;
  color: ${Color.Grey};
  border: 1px solid transparent;
  border-radius: 6px;
  background-color: ${Color.MediumGrey};
  font-size: ${FontSize.SmallM};
  width: 100%;

  ::placeholder {
    color: ${rgba(Color.Grey, 0.5)};
  }
`;
