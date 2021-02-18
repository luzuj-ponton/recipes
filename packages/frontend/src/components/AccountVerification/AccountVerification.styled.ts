import { Link } from "react-router-dom";
import { Color } from "src/enums/color.enum";
import { FontSize } from "src/enums/fontsize.enum";
import styled from "styled-components";
import { Form } from "formik";
import { FontWeight } from "src/enums/fontweight.enum";
import { FlexContainer } from "../Containers/Containers.styles";
import { Breakpoint } from "src/enums/breakpoint.enum";

export const PageWrapper = styled(FlexContainer)`
  height: 100vh;
`;

export const StyledForm = styled(Form)`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media ${Breakpoint.Desktop} {
    width: 450px;
  }
`;
export const AccountFormWrapper = styled(FlexContainer)`
  @media ${Breakpoint.Desktop} {
    margin: 0 50px 40px 0;
  }
`;

export const HeroContainer = styled(FlexContainer)`
  display: none;

  @media ${Breakpoint.Desktop} {
    padding: 40px;
    border-radius: 20px;
    background-color: grey; //TEMPORARY
    height: 45%;
    flex: 0.8;
    display: flex;
    color: ${Color.White};
  }
`;

export const Title = styled.h2`
  font-weight: ${FontWeight.Regular};
  margin: 15px 0;
  font-size: ${FontSize.Medium};
  @media ${Breakpoint.Tablet} {
    font-size: ${FontSize.Big};
  }
`;

//TEMPORARY STYLED-COMPONENT - MAKE REUSABLE
export const Logo = styled(Link)`
  font-size: ${FontSize.BigL};
  color: ${Color.Red};
  font-family: "Leckerli One", cursive;
  margin-bottom: 20px;
`;

export const AccountFooter = styled.p`
  margin-top: 15px;
  @media ${Breakpoint.Desktop} {
    display: none;
  }
`;

export const Header = styled.h2`
  font-size: ${FontSize.Big};
`;

export const Text = styled.p`
  margin: 20px 0;
  font-size: ${FontSize.MediumS};
  text-align: center;
  line-height: 30px;
  font-weight: ${FontWeight.Light};
`;

export const StyledkLink = styled(Link)`
  color: ${Color.Red};
  font-weight: ${FontWeight.Bold};
`;
