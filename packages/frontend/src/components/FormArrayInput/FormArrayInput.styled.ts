import { Field } from "formik";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { Color } from "src/enums/color.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import styled from "styled-components";
import { FlexContainer } from "../Containers/Containers.styles";
import { darken } from "polished";
import { FontSize } from "src/enums/fontsize.enum";

export const InputGroupWrapper = styled(FlexContainer)`
  min-width: 90%;
  margin: 5px 15px 15px;
  @media ${Breakpoint.Desktop} {
    min-width: 80%;
    max-width: 90%;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 5px 15px 15px;
  @media ${Breakpoint.Desktop} {
    min-width: 90%;
  }
`;

export const Input = styled(Field)`
  padding: 10px 15px;
  min-width: 180px;
  width: 95%;
  margin: 3px 0;
  border: 2px solid ${Color.LightGrey};
  border-radius: 20px;
  text-align: center;
  :focus {
    border-color: ${Color.Red};
  }
`;

export const LabelWrapper = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: inline-block;
  width: 125px;
  margin-bottom: 10px;
  margin-right: 15px;
  font-size: ${FontSize.MediumS};
`;

export const DeleteItemButton = styled.button`
  margin-left: 10px;
  padding: 10px 15px;
  aspect-ratio: 1/1;
  background-color: ${Color.Red};
  border-radius: 50%;
  color: ${Color.White};
  font-weight: ${FontWeight.Bold};
  cursor: pointer;
  :hover {
    background-color: ${darken(0.05, Color.Red)};
  }
`;
