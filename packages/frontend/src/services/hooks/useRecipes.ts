import { useQuery } from "react-query";
import { QueryKeys } from "src/enums/queryKeys.enum";
import { getAllRecipes } from "../services";

export const useRecipes = () => {
  const query = useQuery(QueryKeys.Recipes, getAllRecipes);
  return query;
};
