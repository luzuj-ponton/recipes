import { Breakpoint } from "src/enums/breakpoint.enum";
import { Color } from "src/enums/color.enum";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: none;
  @media ${Breakpoint.Desktop} {
    height: 100%;
    width: 100%;
    border-radius: 20px;
    border: 2px solid ${Color.Red};
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;
