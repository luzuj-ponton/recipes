import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { CardsGrid } from "../Home/CardsGrid/CardsGrid";
import { Pagination } from "./Pagination/Pagination";
import { PageSetter } from "./PageSetter/PageSetter";
import { Search } from "src/components/Search/Search";
import { Accordion } from "src/components/Accordion/Accordion";
import { CardsGridWrapper, Wrapper } from "./Home.styled";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Pagination>
        <Wrapper>
          <Accordion />
          <CardsGridWrapper>
            <Search />
            <CardsGrid />
            <PageSetter />
          </CardsGridWrapper>
        </Wrapper>
      </Pagination>
    </>
  );
};
