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
import { Socials } from "../../components/Socials/Socials";
import { footerItems } from "./config";

export const Footer: React.FC = () => (
  <Wrapper>
    <SocialsWrapper justify="space-between">
      <Logo to={Routes.Home}>Bochen</Logo>
      <IconsWrapper>
        <Socials />
      </IconsWrapper>
    </SocialsWrapper>
    <FooterItemsWrapper>
      {footerItems.map((footerItem) => (
        <FooterItem key={footerItem.id}>
          {footerItem.columnItems.map((columnItem) => (
            <Text key={columnItem.text}>{columnItem.text}</Text>
          ))}
        </FooterItem>
      ))}
    </FooterItemsWrapper>
    <Copyright>
      Made by
      <StyledLink href="https://github.com/luzuj-ponton" rel="noopener noreferrer" target="_blank">
        Luzuj Ponton
      </StyledLink>
      &copy;.
    </Copyright>
  </Wrapper>
);
