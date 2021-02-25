import styled from "styled-components";
import { Color } from "src/enums/color.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import { FlexContainer } from "../Containers/Containers.styles";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { FontSize } from "src/enums/fontsize.enum";

export const Wrapper = styled(FlexContainer)`
  margin: 5px 15px 15px;
  width: 90%;
`;

export const Label = styled.label`
  font-weight: ${FontWeight.Light};
  margin-bottom: 3px;
`;

export const Input = styled.input`
  padding: 10px 15px;
  min-width: 260px;
  width: 100%;
  margin: 3px 0;
  border: 2px solid ${Color.LightGrey};
  border-radius: 20px;
  text-align: center;
  :focus {
    border-color: ${Color.Red};
  }

  @media ${Breakpoint.Desktop} {
    min-width: 100%;
  }
`;

export const ErrorMsg = styled.p`
  margin-top: 2px;
  height: 20px;
  color: ${Color.Red};
  text-align: center;
  font-weight: ${FontWeight.SemiBold};
  font-size: ${FontSize.SmallS};
`;
