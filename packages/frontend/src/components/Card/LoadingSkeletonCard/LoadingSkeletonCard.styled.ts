import { Breakpoint } from "src/enums/breakpoint.enum";
import { Color } from "src/enums/color.enum";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ImageSkeleton = styled.div`
  height: 140px;
  background-color: ${Color.LightGrey};
  border-radius: 10px;
  @media ${Breakpoint.TabletS} {
    height: 100px;
  }
  @media ${Breakpoint.Tablet} {
    height: 140px;
  }
`;

export const RecipeNameSkeleton = styled.div`
  background-color: ${Color.Silver};
  opacity: 0.4;
  height: 20px;
  margin: 20px 0 8px 0;
  border-radius: 10px;
`;

export const BottomPanelSkeleton = styled.div`
  height: 18px;
  background-color: ${Color.Silver};
  opacity: 0.2;
  border-radius: 10px;
`;
