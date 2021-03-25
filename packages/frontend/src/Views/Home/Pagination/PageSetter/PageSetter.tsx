import { Wrapper, ArrowIcon, PageNumber } from "./PageSetter.styled";
import paginationarrow from "src/assets/images/paginationarrow.svg";
import { setPage } from "../reducer/actions/pagination.actions";
import { usePaginationContext } from "../hooks/usePaginationContext";
import { Color } from "src/enums/color.enum";
import { GetVisisblePagesArrayParams } from "./PageSetter.types";

export const PageSetter: React.FC = () => {
  const [{ maxPages, page }, dispatch] = usePaginationContext();

  const getVisiblePagesArray = ({ activePage, totalPages }: GetVisisblePagesArrayParams) => {
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

  const pagesArr: number[] = getVisiblePagesArray({ activePage: page, totalPages: maxPages });

  const handleDecrementPage = () => {
    if (page === 1) return;

    setPage(dispatch, page - 1);
  };

  const handleIncrementPage = () => {
    if (page === maxPages) return;

    setPage(dispatch, page + 1);
  };

  if (maxPages === 1) {
    return null;
  }

  // set active color of first and last page
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.innerText;
    const parsedValue = parseInt(value);
    setPage(dispatch, parsedValue);
  };

  return (
    <Wrapper>
      <ArrowIcon src={paginationarrow} onClick={handleDecrementPage} />
      {maxPages > 5 && (
        <PageNumber
          variant="primary"
          activeColor={page === 1 ? `${Color.Red}` : undefined}
          onClick={handleClick}
        >
          1
        </PageNumber>
      )}
      {pagesArr[0] > 2 && maxPages > 5 && <div>...</div>}
      {pagesArr.map((pageNumber: number) => (
        <PageNumber
          key={pageNumber}
          variant="primary"
          activeColor={pageNumber === page ? `${Color.Red}` : undefined}
          onClick={() => setPage(dispatch, pageNumber)}
        >
          {pageNumber}
        </PageNumber>
      ))}
      {pagesArr[2] < maxPages - 1 && maxPages > 5 && <div>...</div>}
      {maxPages > 5 && (
        <PageNumber
          variant="primary"
          activeColor={maxPages === page ? `${Color.Red}` : undefined}
          onClick={handleClick}
        >
          {maxPages}
        </PageNumber>
      )}
      <ArrowIcon src={paginationarrow} onClick={handleIncrementPage} />
    </Wrapper>
  );
};
