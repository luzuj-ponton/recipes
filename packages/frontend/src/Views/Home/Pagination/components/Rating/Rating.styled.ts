import styled from "styled-components";

import svg from "react-inlinesvg";
import { Color } from "src/enums/color.enum";

export const StarIcon = styled(svg)`
  fill: ${Color.Yellow};
  height: 14px;
  width: 14px;
  margin-right: 10px;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;

export const Score = styled.span`
  margin-right: 2px;
`;
