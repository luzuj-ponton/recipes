import styled from "styled-components";
import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import { Button } from "../../common/ui/Button.styled";
import { Form } from "formik";
import { darken } from "polished";
import { Breakpoint } from "src/enums/breakpoint.enum";

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${Color.Red};
  border-radius: 20px;
`;
export const ContentContainer = styled.section`
  padding: 30px;
  margin: 0 auto;
  max-width: 900px;
  @media ${Breakpoint.Tablet} {
    padding: 70px;
  }
`;

export const TitleText = styled.h2`
  color: ${Color.White};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.SemiBold};
  text-align: center;
  @media ${Breakpoint.Tablet} {
    font-size: ${FontSize.MediumL};
  }
  @media ${Breakpoint.Desktop} {
    font-size: ${FontSize.Big};
  }
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  @media ${Breakpoint.MobileS} {
    flex-direction: row;
  }
`;

export const StyledButton = styled(Button)`
  align-self: flex-start;
  font-size: ${FontSize.SmallM};
  padding: 14px 36px;
  background-color: ${Color.Yellow};
  :hover {
    background-color: ${darken(0.03, Color.Yellow)};
  }
  :active {
    background-color: ${darken(0.06, Color.Yellow)};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  padding: 14px;
  margin-bottom: 14px;
  color: ${Color.White};
  border-radius: 30px;
  border: 2px solid ${Color.LightGrey};
  transition: 0.2s;
  font-size: ${FontSize.SmallM};
  :focus {
    border-color: ${Color.White};
  }
  ::placeholder {
    color: ${Color.White};
  }
  @media ${Breakpoint.MobileS} {
    margin: 0 14px 0 0;
  }
`;
