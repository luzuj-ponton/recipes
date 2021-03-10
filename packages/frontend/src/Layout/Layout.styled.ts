import styled from "styled-components";
import { Breakpoint } from "../enums/breakpoint.enum";
import { GridWidth } from "../enums/gridWidth.enum";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media ${Breakpoint.TabletS} {
    padding: 0 30px;
  }

  @media ${Breakpoint.Desktop} {
    max-width: ${GridWidth.Desktop};
  }
`;
