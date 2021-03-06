import { Form } from "formik";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  margin: 30px 0;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${Breakpoint.Tablet} {
    width: 60%;
  }
`;
export const PageHeader = styled.h3`
  margin-top: 10px;
  font-size: ${FontSize.MediumS};
  font-weight: ${FontWeight.Regular};
`;
export const TagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
