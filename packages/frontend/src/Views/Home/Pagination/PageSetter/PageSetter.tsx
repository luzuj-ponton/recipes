import { Wrapper, ArrowIcon, PageNumber } from "./PageSetter.styled";
import paginationarrow from "src/assets/images/paginationarrow.svg";
import { setPage } from "../reducer/actions/pagination.actions";
import { usePaginationContext } from "../hooks/usePaginationContext";
import { Color } from "src/enums/color.enum";

export const PageSetter: React.FC = () => {
  const [{ maxPages, page }, dispatch] = usePaginationContext();

  const pages = Array.from(Array(maxPages).keys(), (item) => item + 1);

  const handleDecrementPage = () => {
    if (page === 0) return;

    setPage(dispatch, page - 1);
  };

  const handleIncrementPage = () => {
    if (page === maxPages - 1) return;

    setPage(dispatch, page + 1);
  };

  if (maxPages === 1) {
    return null;
  }

  return (
    <Wrapper>
      <ArrowIcon src={paginationarrow} onClick={handleDecrementPage} />
      {pages.map((pageNumber) => (
        <PageNumber
          variant="primary"
          activeColor={page + 1 === pageNumber ? `${Color.Red}` : undefined}
          key={pageNumber}
          onClick={() => setPage(dispatch, pageNumber - 1)}
        >
          {pageNumber}
        </PageNumber>
      ))}
      <ArrowIcon src={paginationarrow} onClick={handleIncrementPage} />
    </Wrapper>
  );
};
