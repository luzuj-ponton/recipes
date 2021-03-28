import styled from "styled-components";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import { FontSize } from "src/enums/fontsize.enum";
import { Color } from "src/enums/color.enum";

export const CardsContainer = styled.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 10px;

  @media ${Breakpoint.MobileXS} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${Breakpoint.TabletS} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 30px;
  }
`;

export const NoResults = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${Breakpoint.MobileS} {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  height: 160px;
  border-radius: 50%;

  @media ${Breakpoint.Tablet} {
    height: 220px;
  }
`;

export const Message = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-direction: column;

  @media ${Breakpoint.MobileS} {
    margin-right: 30px;
  }
`;

export const Text = styled.p`
  color: ${Color.Grey};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.MediumS};
  margin: 3px;

  @media ${Breakpoint.Tablet} {
    font-size: ${FontSize.Medium};
  }
`;
