import styled from "styled-components";
import heroImage from "../../assets/images/heroImage.jpg";
import { FontSize } from "src/enums/fontsize.enum";
import { Color } from "src/enums/color.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import { RedirectButton } from "../../common/ui/Button.styled";
import svg from "react-inlinesvg";
import { rgba } from "polished";
import { Breakpoint } from "src/enums/breakpoint.enum";

export const Wrapper = styled.div`
  position: relative;
  border-radius: 20px;
  padding: 30px;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: 20px 0 30px 0;
  :before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${rgba(`${Color.Black}`, 0.2)};
    border-radius: 20px;
  }
  @media ${Breakpoint.Desktop} {
    padding: 90px 70px;
    margin-bottom: 60px;
    background-position-y: top;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  @media ${Breakpoint.Tablet} {
    width: 55%;
  }
`;

export const Heading = styled.h1`
  font-size: ${FontSize.Big};
  color: ${Color.White};
  font-weight: ${FontWeight.SemiBold};
  margin-bottom: 20px;

  @media ${Breakpoint.MobileS} {
    font-size: ${FontSize.BigM};
  }
  @media ${Breakpoint.Tablet} {
    font-size: ${FontSize.BigL};
  }
`;

export const Text = styled.p`
  color: ${Color.White};
  line-height: 24px;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 200px;
  transition: 0.2s;
  :hover {
    transform: translateX(5%);
  }
`;

export const StyledRedirectButton = styled(RedirectButton)`
  padding: 0;
  text-align: left;
  color: ${Color.White};
  font-size: ${FontSize.SmallM};
  font-weight: ${FontWeight.SemiBold};
`;

export const Arrow = styled(svg)`
  height: 20px;
  width: 20px;
  margin-left: 10px;
  fill: ${Color.White};
`;
