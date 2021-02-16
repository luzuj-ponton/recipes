import styled from "styled-components";
import { Breakpoint } from "../enums/breakpoint.enum";

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  @media ${Breakpoint.Desktop} {
    max-width: 1280px;
    margin: 0 auto;
  }
`;
