import { useQuery } from "react-query";
import { QueryKeys } from "src/enums/queryKeys.enum";
import { getTags } from "../tagsService";

export const useTags = () => {
  const query = useQuery(QueryKeys.Tags, () => getTags(), {
    refetchOnWindowFocus: false,
  });
  return query;
};
