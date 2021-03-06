import { Breakpoint } from "src/enums/breakpoint.enum";
import styled from "styled-components";

export const Page = styled.div<{ active: boolean }>`
  width: 120%;
  height: 400px;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  @media ${Breakpoint.Desktop} {
    height: 800px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 450px;
  overflow-y: overlay;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${Breakpoint.Desktop} {
    height: 80%;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
