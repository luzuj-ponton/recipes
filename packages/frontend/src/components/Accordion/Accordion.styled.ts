import styled, { css } from "styled-components";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import svg from "react-inlinesvg";
import { TagsWrapperTypes, TagTypes } from "./Accordion.types";
import { Color } from "src/enums/color.enum";

export const Wrapper = styled.div`
  @media ${Breakpoint.Desktop} {
    min-width: 250px;
    margin-right: 30px;
  }
`;

export const Title = styled.h1`
  font-size: ${FontSize.Big};
  font-weight: ${FontWeight.SemiBold};
  margin-bottom: 20px;
`;

export const RecipeTypeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.4s;
  padding: 10px 0;
`;

export const RecipeType = styled.p`
  font-weight: ${FontWeight.Medium};
`;

export const Tag = styled.p<TagTypes>`
  font-size: ${FontSize.SmallM};
  padding: 8px 0 8px 12px;
  cursor: pointer;
  transition: 0.2s;
  color: ${({ isActive }) => (isActive ? Color.Red : Color.Black)};
  :hover {
    color: ${Color.Red};
  }
`;

export const TagsWrapper = styled.div<TagsWrapperTypes>`
  opacity: 0;
  max-height: 0;
  overflow: hidden;
  transition: all 0.4s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      max-height: 150px;
    `};
`;

export const Icon = styled(svg)`
  fill: ${Color.Black};
  height: 14px;
  width: 14px;
`;
