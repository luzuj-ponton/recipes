import React from "react";
import {
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

import { socials } from "../../components/SocialIcon/config";
import { SocialIcon } from "../../components/SocialIcon/SocialIcon";
import { footerItems } from "./config";

//placeholder

export const Footer = () => {
  return (
    <Wrapper>
      <SocialsWrapper>
        <Logo to={Routes.Home}>Bochen</Logo>
        <IconsWrapper>
          {socials.map((el) => {
            return <SocialIcon key={el.src} color={el.color} src={el.src} link={el.link} />;
          })}
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
