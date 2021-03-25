import { Options } from "./Sort.types";

export const options: Options[] = [
  { value: "date -1", text: "Date: From newest" },
  { value: "date 1", text: "Date: From oldest" },
  { value: "rating 1", text: "Rating: From lowest" },
  { value: "rating -1", text: "Rating: From highest" },
];
