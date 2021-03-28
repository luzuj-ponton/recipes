import { Wrapper, ArrowIcon, PageNumber } from "./PageSetter.styled";
import paginationarrow from "src/assets/images/paginationarrow.svg";
import { setPage } from "../reducer/actions/pagination.actions";
import { usePaginationContext } from "../hooks/usePaginationContext";
import { getVisiblePagesArray } from "./PageSetter.utils";
import { SyntheticEvent } from "react";

export const PageSetter: React.FC = () => {
  const [{ maxPages, page }, dispatch] = usePaginationContext();

  const pagesArr: number[] = getVisiblePagesArray({ activePage: page, totalPages: maxPages });

  const handleDecrementPage = () => {
    if (page === 1) return;

    setPage(dispatch, page - 1);
  };

  const handleIncrementPage = () => {
    if (page === maxPages) return;

    setPage(dispatch, page + 1);
  };

  // set active color of first and last page
  const handleClick = (e: SyntheticEvent) => {
    const value = e.currentTarget.id;
    setPage(dispatch, Number(value));
  };

  if (maxPages === 1) {
    return null;
  }

  return (
    <Wrapper>
      <ArrowIcon src={paginationarrow} onClick={handleDecrementPage} />
      {maxPages > 5 && (
        <PageNumber id="1" variant="primary" isActive={page === 1} onClick={handleClick}>
          1
        </PageNumber>
      )}
      {pagesArr[0] > 2 && maxPages > 5 && <div>...</div>}
      {pagesArr.map((pageNumber: number) => (
        <PageNumber
          key={pageNumber}
          variant="primary"
          isActive={pageNumber === page}
          onClick={() => setPage(dispatch, pageNumber)}
        >
          {pageNumber}
        </PageNumber>
      ))}
      {pagesArr[2] < maxPages - 1 && maxPages > 5 && <div>...</div>}
      {maxPages > 5 && (
        <PageNumber
          id={String(maxPages)}
          variant="primary"
          isActive={maxPages === page}
          onClick={handleClick}
        >
          {maxPages}
        </PageNumber>
      )}
      <ArrowIcon src={paginationarrow} onClick={handleIncrementPage} />
    </Wrapper>
  );
};
