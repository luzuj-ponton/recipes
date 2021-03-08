import { Field } from "formik";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { Color } from "src/enums/color.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import styled from "styled-components";

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  margin: 10px 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled(Field)`
  padding: 10px 15px;
  min-width: 140px;
  margin: 3px 0;
  border: 2px solid ${Color.LightGrey};
  border-radius: 20px;
  text-align: center;
  margin: 10px 0;
  :focus {
    border-color: ${Color.Red};
  }
  @media ${Breakpoint.Desktop} {
    min-width: 100%;
  }
`;

export const StepTitle = styled.h3`
  font-weight: ${FontWeight.SemiBold};
`;
