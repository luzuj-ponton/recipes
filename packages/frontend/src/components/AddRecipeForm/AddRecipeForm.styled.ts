import { Form } from "formik";
import { Breakpoint } from "src/enums/breakpoint.enum";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media ${Breakpoint.Tablet} {
    width: 70%;
  }
  @media ${Breakpoint.Desktop} {
    display: grid;
    width: 100%;
    grid-gap: 50px;

    grid-template-columns: repeat(2, 1fr);
    grid-rows: 1fr;
  }
`;
