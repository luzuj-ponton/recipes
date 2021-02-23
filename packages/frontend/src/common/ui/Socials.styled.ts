import styled from "styled-components";

import svg from "react-inlinesvg";
import { rgba } from "polished";
import { Color } from "../../enums/color.enum";

export const SocialIcon = styled(svg)`
  width: 20px;
  height: 20px;
  fill: ${rgba(`${Color.White}`, 0.4)};
  transition: 0.2s;

  :hover {
    fill: ${Color.White};
    transform: scale(1.1);
  }
`;
