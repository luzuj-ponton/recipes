import styled from "styled-components";
import { ContainerProps } from "./Containers.types";

export const FlexContainer = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  ${({ direction }): string =>
    direction ? `flex-direction: ${direction}` : "flex-direction: row"};
  align-items: ${({ align }): string => (align ? align : "center")};
  justify-content: ${({ justify }): string => (justify ? justify : "center")};
`;
