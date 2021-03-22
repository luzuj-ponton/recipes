export interface GetAllQueryOptions {
  offset?: number;
  limit?: number;
  fields?: string;
  text?: string;
  tagsArr?: string[];
  sortBy?: SortBy;
  sortType?: SortType;
}

type SortBy = 'date' | 'rating';
export type SortType = -1 | 1;
