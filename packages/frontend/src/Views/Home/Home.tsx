import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { CardsGrid } from "../../components/Pagination/components/CardsGrid/CardsGrid";
import { Pagination } from "../../components/Pagination/Pagination";
import { Search } from "src/components/Pagination/components/Search/Search";
import { Accordion } from "src/components/Pagination/components/Accordion/Accordion";
import { CardsGridWrapper, SearchAndSortWrapper, Wrapper } from "./Home.styled";
import { Sort } from "src/components/Pagination/components/Sort/Sort";

export const Home: React.FC = () => (
  <>
    <Hero />
    <Pagination>
      <Wrapper>
        <Accordion />
        <CardsGridWrapper>
          <SearchAndSortWrapper>
            <Search />
            <Sort />
          </SearchAndSortWrapper>
          <CardsGrid />
        </CardsGridWrapper>
      </Wrapper>
    </Pagination>
  </>
);
