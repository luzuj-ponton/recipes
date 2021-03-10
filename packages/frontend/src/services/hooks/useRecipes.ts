import { useQuery } from "react-query";
import { QueryKeys } from "src/enums/queryKeys.enum";
import { getAllRecipes } from "../recipesService";

export const useRecipes = (
  offset?: number,
  limit?: number,
  fields?: string,
  text?: string,
  tagsArr?: string[],
) => {
  const query = useQuery(
    QueryKeys.Recipes,
    () => getAllRecipes(offset, limit, fields, text, tagsArr),
    {
      refetchOnWindowFocus: false,
    },
  );
  return query;
};
