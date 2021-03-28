import { Option } from "./Sort.types";

export const options: Option[] = [
  {
    value: {
      sortBy: "date",
      sortType: -1,
    },
    text: "Date: From newest",
  },
  {
    value: {
      sortBy: "date",
      sortType: 1,
    },
    text: "Date: From oldest",
  },
  {
    value: {
      sortBy: "rating",
      sortType: 1,
    },
    text: "Rating: From lowest",
  },
  {
    value: {
      sortBy: "rating",
      sortType: -1,
    },
    text: "Rating: From highest",
  },
];
