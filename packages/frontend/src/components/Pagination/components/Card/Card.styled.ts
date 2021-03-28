import styled, { css } from "styled-components";

import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import svg from "react-inlinesvg";
import { rgba } from "polished";
import { Link } from "react-router-dom";
import { zIndex } from "src/enums/zIndex.enum";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { HeartIconProps, ImageContainerProps } from "./Card.types";
import backupImage from "src/assets/images/backupImage.jpg";

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  height: 140px;
  width: 100%;
  max-width: 100%;
  border-radius: 10px;
  background-image: ${({ bgImage }): string =>
    bgImage ? `url(${bgImage})` : `url(${backupImage})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: ${rgba(Color.Black, 0.05)};
    transition: 0.4s;
  }

  @media ${Breakpoint.TabletS} {
    height: 100px;
  }
  @media ${Breakpoint.Tablet} {
    height: 140px;
  }
`;

export const Wrapper = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
  :hover ${ImageContainer}:before {
    background-color: ${rgba(`${Color.Black}`, 0.2)};
  }
  min-height: 205px;
`;

export const HeartIcon = styled(svg)<HeartIconProps>`
  position: absolute;
  z-index: ${zIndex.HeartIcon};
  top: 15px;
  right: 15px;
  fill: ${Color.White};
  height: 20px;
  width: 20px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  :hover {
    fill: ${Color.Raspberry};
    transform: scale(1.3);
  }
  ${({ $isFilled }) =>
    $isFilled &&
    css`
      fill: ${Color.Red};
      transform: scale(1.3);
      :hover {
        fill: ${Color.Red};
      }
    `}
`;

export const RecipeName = styled.p`
  color: ${Color.Black};
  font-size: ${FontSize.SmallM};
  font-weight: ${FontWeight.Medium};
  margin: 20px 0 8px;
`;

export const BottomPanel = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${FontSize.SmallS};
  color: ${Color.Grey};
  @media ${Breakpoint.MobileS} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Author = styled.p`
  width: 100%;
  margin-top: 3px;
  @media ${Breakpoint.MobileS} {
    text-align: right;
    margin-top: 0;
  }
`;
