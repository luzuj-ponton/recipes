import React from "react";
import {
  IconWrap,
  SocialsWrapper,
  Wrapper,
  FooterItemsWrapper,
  FooterItem,
  Copyright,
  StyledLink,
  Text,
  IconsWrapper,
} from "./Footer.styled";
import { Logo } from "../../common/ui/Logo.styled";
import { Routes } from "src/enums/routes.enum";
import { SocialIcon } from "src/common/ui/Socials.styled";
import { Color } from "../../enums/color.enum";
import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";
import githubIcon from "../../assets/images/github.svg";

export const Footer = () => {
  return (
    <Wrapper>
      <SocialsWrapper>
        <Logo to={Routes.Home}>Bochen</Logo>
        <IconsWrapper>
          <IconWrap
            color={Color.Blue}
            href="https://www.linkedin.com/feed/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon src={linkedinIcon} />
          </IconWrap>
          <IconWrap
            color={Color.LightBlue}
            href="https://www.linkedin.com/feed/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon src={facebookIcon} />
          </IconWrap>
          <IconWrap
            color={Color.Violet}
            href="https://www.linkedin.com/feed/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <SocialIcon src={githubIcon} />
          </IconWrap>
        </IconsWrapper>
      </SocialsWrapper>
      <FooterItemsWrapper>
        <FooterItem>
          <Text>Presentations</Text>
          <Text>Professionals</Text>
          <Text>Stores</Text>
        </FooterItem>
        <FooterItem>
          <Text>Presentations</Text>
          <Text>Professionals</Text>
          <Text>Stores</Text>
        </FooterItem>
        <FooterItem>
          <Text>Presentations</Text>
          <Text>Professionals</Text>
          <Text>Stores</Text>
        </FooterItem>
        <FooterItem>
          <Text>Presentations</Text>
          <Text>Professionals</Text>
          <Text>Stores</Text>
        </FooterItem>
      </FooterItemsWrapper>
      <Copyright>
        Made by{" "}
        <StyledLink
          href="https://github.com/luzuj-ponton"
          rel="noopener noreferrer"
          target="_blank"
        >
          Luzuj Ponton
        </StyledLink>{" "}
        &copy;.
      </Copyright>
    </Wrapper>
  );
};
