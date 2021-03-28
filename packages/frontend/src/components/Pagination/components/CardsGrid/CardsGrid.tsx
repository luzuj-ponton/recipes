import { CardsContainer, NoResults, Image, Message, Text } from "./CardsGrid.styled";
import { useRecipes } from "src/services/hooks/useRecipes";
import { Card } from "src/components/Pagination/components/Card/Card";
import { LoadingSkeletonCard } from "src/components/Pagination/components/Card/LoadingSkeletonCard/LoadingSkeletonCard";
import { usePaginationContext } from "../../hooks/usePaginationContext";
import React, { useEffect, useRef } from "react";
import { setMaxPages } from "../../reducer/actions/pagination.actions";
import { useEffectAfterMount } from "src/hooks/useEffectAfterMount";
import { PageSetter } from "../../PageSetter/PageSetter";
import noResultsImage from "src/assets/images/noResultsImage.jpg";

export const CardsGrid: React.FC = () => {
  const [
    { offset, limit, field, filterText, tagsArr, sortBy, sortType },
    dispatch,
  ] = usePaginationContext();

  const { data, refetch, isFetching } = useRecipes({
    offset,
    limit,
    fields: field,
    text: filterText,
    tagsArr,
    sortBy,
    sortType,
  });

  const recipesData = data?.data;

  const skeletonData = Array.from(Array(limit).keys());

  const maxPages = recipesData ? recipesData?.resultsQuantity / limit : 0;

  const cardsRef = useRef<HTMLDivElement>(null!); // jak daje null to wywala błąd, nie wiem jak to inaczej otypować albo co wpisać zamiast null!

  //probably temporary solution
  const executeScroll = () => {
    const node = cardsRef.current;
    window.scrollTo({ top: node?.offsetTop - 230, behavior: "smooth" });
  };

  useEffect(() => {
    setMaxPages(dispatch, Math.ceil(maxPages));
  }, [dispatch, maxPages]);

  useEffectAfterMount(() => {
    refetch();
    executeScroll();
  }, [dispatch, refetch, offset, filterText, tagsArr, sortBy, sortType]);

  if (recipesData?.recipes.length === 0)
    return (
      <NoResults>
        <Message>
          <Text>No results...</Text>
          <Text>Try something else!</Text>
        </Message>

        <Image src={noResultsImage} alt="shroom" />
      </NoResults>
    );

  if (isFetching) {
    return (
      <CardsContainer>
        {skeletonData.map((index) => (
          <LoadingSkeletonCard key={index} />
        ))}
      </CardsContainer>
    );
  }

  return (
    <>
      <CardsContainer ref={cardsRef}>
        {recipesData?.recipes.map(({ _id, photoUrl, title, rating }) => (
          <Card
            key={_id}
            id={_id}
            photoUrl={photoUrl}
            title={title}
            rating={rating?.rating}
            total={rating?.total}
          />
        ))}
      </CardsContainer>
      <PageSetter />
    </>
  );
};
