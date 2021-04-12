import { GetVisisblePagesArrayParams } from "./PageSetter.types";

export const getVisiblePagesArray = ({ activePage, totalPages }: GetVisisblePagesArrayParams) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_: null, i: number) => i + 1);
  }
  if (activePage < 4) {
    return Array.from({ length: 3 }, (_, i) => i + 2);
  }
  if (totalPages - 2 <= activePage) {
    return Array.from({ length: 3 }, (_: null, i: number) => totalPages - 3 + i);
  }
  return Array.from({ length: 3 }, (_: null, i: number) => i + activePage - 1);
};
