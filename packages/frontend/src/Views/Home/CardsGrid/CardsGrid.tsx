import { CardsContainer } from "./CardsGrid.styled";
import { useRecipes } from "src/services/hooks/useRecipes";
import { Card } from "src/components/Card/Card";
import { LoadingSkeletonCard } from "src/components/Card/LoadingSkeletonCard/LoadingSkeletonCard";
import { usePaginationContext } from "../Pagination/hooks/usePaginationContext";
import { useEffect } from "react";
import { setMaxPages } from "../Pagination/reducer/actions/pagination.actions";

export const CardsGrid: React.FC = () => {
  const [state, dispatch] = usePaginationContext();

  const offset = state.page * state.limit;

  const { isLoading, data, refetch } = useRecipes(
    offset,
    state.limit,
    state.field,
    state.filterText,
    state.tagsArr,
  );

  const recipesData = data?.data;

  const skeletonData = Array.from(Array(state.limit).keys());

  const maxPages = recipesData ? recipesData?.resultsQuantity / state.limit : 0;

  useEffect(() => {
    setMaxPages(dispatch, Math.ceil(maxPages));
  }, [dispatch, maxPages]);

  useEffect(() => {
    refetch();
  }, [dispatch, refetch, offset, state.filterText, state.tagsArr]);

  if (recipesData?.recipes.length === 0) return <CardsContainer>Brak wyników</CardsContainer>;

  if (isLoading)
    return (
      <CardsContainer>
        {skeletonData.map((index) => (
          <LoadingSkeletonCard key={index} />
        ))}
      </CardsContainer>
    );

  return (
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
  );
};
