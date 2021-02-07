import styled from "styled-components";
import { ContainerProps } from "./Containers.types";

export const FlexContainer = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ align }) => (align ? align : "center")};
  justify-content: ${({ justify }) => (justify ? justify : "center")};
`;
