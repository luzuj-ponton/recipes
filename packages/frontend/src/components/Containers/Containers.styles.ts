import styled from "styled-components";
import { alignTypes, ContainerProps, FlexDirectionType, justifyTypes } from "./Containers.types";

export const FlexContainer = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }): FlexDirectionType => (direction ? direction : "row")};
  align-items: ${({ align }): alignTypes => (align ? align : "center")};
  justify-content: ${({ justify }): justifyTypes => (justify ? justify : "center")};
`;
