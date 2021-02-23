import { Color } from "src/enums/color.enum";
import styled, { css } from "styled-components";
import { SocialIcon } from "src/common/ui/Socials.styled";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { rgba } from "polished";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  width: 100%;
  /* background-color: ${Color.LightGrey}; */
`;

export const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

const setIconColor = (color?: string) => css`
  border-color: ${color ? `${color}` : "black"};
  fill: ${color ? `${color}` : "black"};
`;

const setBgColor = (color?: string) => css`
  background-color: ${color ? `${color}` : "black"};
`;

interface IconWrapProps {
  color?: string;
}

export const IconWrap = styled.a<IconWrapProps>`
  display: block;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  border-radius: 50%;
  transition: 0.2s;
  margin: 0 6px;
  ${({ color }) => setIconColor(color)};

  :hover {
    ${({ color }) => setBgColor(color)};
    border-color: transparent;

    ${SocialIcon} {
      fill: ${Color.White};
      transform: scale(1);
    }
  }

  ${SocialIcon} {
    width: 16px;
    height: 16px;
    ${({ color }) => setIconColor(color)};
    border-color: transparent;
  }
`;

export const FooterItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${Breakpoint.MobileS} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const FooterItem = styled.div`
  width: 50%;
  padding-bottom: 10px;
  @media ${Breakpoint.Tablet} {
    width: 25%;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: ${FontSize.SmallM};
  color: ${rgba(`${Color.Grey}`, 0.6)};
  font-weight: ${FontWeight.Medium};
`;

export const StyledLink = styled.a`
  color: ${rgba(`${Color.Grey}`, 0.7)};
  font-weight: ${FontWeight.SemiBold};
`;

export const Text = styled.p`
  color: ${Color.Black};
  font-size: ${FontSize.SmallM};
  font-weight: ${FontWeight.Medium};
  margin-bottom: 6px;
`;
