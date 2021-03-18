import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { CardsGrid } from "./Pagination/components/CardsGrid/CardsGrid";
import { Pagination } from "./Pagination/Pagination";
import { Search } from "src/Views/Home/Pagination/components/Search/Search";
import { Accordion } from "src/Views/Home/Pagination/components/Accordion/Accordion";
import { CardsGridWrapper, SearchAndSortWrapper, Wrapper } from "./Home.styled";
import { Sort } from "src/Views/Home/Pagination/components/Sort/Sort";

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
