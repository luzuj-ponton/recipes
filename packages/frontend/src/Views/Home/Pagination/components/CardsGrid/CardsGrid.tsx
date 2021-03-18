import { CardsContainer, NoResults, Image, Message, Text } from "./CardsGrid.styled";
import { useRecipes } from "src/services/hooks/useRecipes";
import { Card } from "src/Views/Home/Pagination/components/Card/Card";
import { LoadingSkeletonCard } from "src/Views/Home/Pagination/components/Card/LoadingSkeletonCard/LoadingSkeletonCard";
import { usePaginationContext } from "../../hooks/usePaginationContext";
import { useEffect } from "react";
import { setMaxPages } from "../../reducer/actions/pagination.actions";
import { useEffectAfterMount } from "src/hooks/useEffectAfterMount";
import { PageSetter } from "../../PageSetter/PageSetter";
import noResultsImage from "src/assets/images/noResultsImage.jpg";

export const CardsGrid: React.FC = () => {
  const [
    { offset, limit, field, filterText, tagsArr, sortBy, sortType },
    dispatch,
  ] = usePaginationContext();

  const { isLoading, data, refetch } = useRecipes({
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

  useEffect(() => {
    setMaxPages(dispatch, Math.ceil(maxPages));
  }, [dispatch, maxPages]);

  useEffectAfterMount(() => {
    refetch();
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

  if (isLoading) {
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
      <CardsContainer>
        {recipesData?.recipes.map((recipe) => (
          <Card
            key={recipe._id}
            id={recipe._id}
            photoUrl={recipe.photoUrl}
            title={recipe.title}
            rating={recipe.rating?.rating}
            total={recipe.rating?.total}
          />
        ))}
      </CardsContainer>
      <PageSetter />
    </>
  );
};
