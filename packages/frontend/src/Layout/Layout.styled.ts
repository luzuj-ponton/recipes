import styled from "styled-components";
import { Breakpoint } from "../enums/breakpoint.enum";
import { MaxWidth } from "../enums/maxWidth.enum";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 30px;

  @media ${Breakpoint.Desktop} {
    max-width: ${MaxWidth.Desktop};
  }
`;
