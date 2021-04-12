import { Breakpoint } from "src/enums/breakpoint.enum";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Breakpoint.Desktop} {
    flex-direction: row;
  }
`;

export const CardsGridWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  @media ${Breakpoint.Desktop} {
    margin-top: 0;
  }
`;

export const SearchAndSortWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${Breakpoint.Desktop} {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;
