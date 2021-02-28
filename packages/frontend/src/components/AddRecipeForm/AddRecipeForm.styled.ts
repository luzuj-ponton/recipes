import { Form } from "formik";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  @media ${Breakpoint.Tablet} {
    width: 70%;
  }
  @media ${Breakpoint.Desktop} {
    display: grid;
    width: 100%;
    grid-gap: 50px;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    grid-rows: 1fr;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;
  min-height: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${Breakpoint.Tablet} {
    width: 70%;
  }
  @media ${Breakpoint.Desktop} {
    width: 100%;
  }
`;

export const Page = styled.div<{ active: boolean }>`
  width: 100%;
  min-height: 450px;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;
export const PageHeader = styled.h3`
  margin-top: 10px;
  font-size: ${FontSize.MediumS};
  font-weight: ${FontWeight.Regular};
`;
