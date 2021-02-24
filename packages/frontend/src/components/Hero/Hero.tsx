import React from "react";

import {
  ContentWrapper,
  Heading,
  Wrapper,
  Text,
  RedirectButtonStyled,
  ButtonWrapper,
  Arrow,
} from "./Hero.styled";
import arrow from "../../assets/images/rightarrow.svg";

import { Routes } from "../../enums/routes.enum";

export const Hero = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Heading>Choose from thousands of recipes</Heading>
        <Text>
          Appropriately integrate technically sound value with scalable infomediaries negotiate
          sustainable strategic theme areas
        </Text>
        <ButtonWrapper>
          <RedirectButtonStyled variant="tertiary" to={Routes.Register}>
            Sign up today
          </RedirectButtonStyled>
          <Arrow src={arrow} />
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};
