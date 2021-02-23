import styled from "styled-components";
import { alignTypes, ContainerProps, justifyTypes } from "./Containers.types";

export const FlexContainer = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  ${({ direction }): string =>
    direction ? `flex-direction: ${direction}` : "flex-direction: row"};
  align-items: ${({ align }): alignTypes => (align ? align : "center")};
  justify-content: ${({ justify }): justifyTypes => (justify ? justify : "center")};
`;
