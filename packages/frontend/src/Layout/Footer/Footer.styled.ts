import { Color } from "src/enums/color.enum";
import styled from "styled-components";
import { FontSize } from "src/enums/fontsize.enum";
import { FontWeight } from "src/enums/fontweight.enum";
import { Breakpoint } from "src/enums/breakpoint.enum";
import { rgba } from "polished";
import { FlexContainer } from "../../components/Containers/Containers.styles";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 30px 0;
  width: 100%;
`;

export const SocialsWrapper = styled(FlexContainer)`
  margin-bottom: 20px;
  justify-content: space-between;
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

export const FooterItemsWrapper = styled(FlexContainer)`
  margin-bottom: 20px;
  flex-wrap: wrap;
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
  margin: 0 4px;
  color: ${rgba(`${Color.Grey}`, 0.7)};
  font-weight: ${FontWeight.SemiBold};
`;

export const Text = styled.p`
  color: ${Color.Black};
  font-size: ${FontSize.SmallM};
  font-weight: ${FontWeight.Medium};
  margin-bottom: 6px;
`;