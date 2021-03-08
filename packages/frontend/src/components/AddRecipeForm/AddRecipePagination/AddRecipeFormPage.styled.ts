import { Breakpoint } from "src/enums/breakpoint.enum";
import styled from "styled-components";
import { PageProps } from "./AddRecipeFormPagination.types";

export const Page = styled.div<PageProps>`
  width: 110%;
  height: 400px;
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  justify-content: space-between;
  @media ${Breakpoint.Desktop} {
    height: 800px;
  }
`;

export const ContentWrapper = styled.div`
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
  justify-content: space-between;
`;
