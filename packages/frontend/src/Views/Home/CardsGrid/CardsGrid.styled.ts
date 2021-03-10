import styled from "styled-components";
import { Breakpoint } from "src/enums/breakpoint.enum";

export const CardsContainer = styled.div`
  margin: 40px 0;

  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 10px;

  @media ${Breakpoint.MobileXS} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${Breakpoint.TabletS} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 30px;
  }
`;
