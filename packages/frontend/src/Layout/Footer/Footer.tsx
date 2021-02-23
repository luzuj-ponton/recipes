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

//placeholder

const footerItems = [
  {
    text1: "Presentations",
    text2: "Professionals",
    text3: "Stores",
  },
  {
    text1: "Webinars",
    text2: "Workshops",
    text3: "Local Meetups",
  },
  {
    text1: "Our Initiatives",
    text2: "Giving Back",
    text3: "Communities",
  },
  {
    text1: "Contact Form",
    text2: "Work With Us",
    text3: "Visit Us",
  },
];

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
        {footerItems.map((el) => {
          return (
            <FooterItem key={el.text1}>
              <Text>{el.text1}</Text>
              <Text>{el.text2}</Text>
              <Text>{el.text3}</Text>
            </FooterItem>
          );
        })}
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
