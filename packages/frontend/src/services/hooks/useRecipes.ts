import { RecipeParameters } from "@shared/src/types/recipe.type";
import { useQuery } from "react-query";
import { QueryKeys } from "src/enums/queryKeys.enum";
import { getAllRecipes } from "../recipesService";

export const useRecipes = (params: RecipeParameters) => {
  const query = useQuery(QueryKeys.Recipes, () => getAllRecipes(params), {
    refetchOnWindowFocus: false,
  });
  return query;
};
