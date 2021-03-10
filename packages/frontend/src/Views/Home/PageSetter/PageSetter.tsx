import { Wrapper, ArrowIcon, PageNumber } from "./PageSetter.styled";
import paginationarrow from "src/assets/images/paginationarrow.svg";
import { setPage } from "../Pagination/reducer/actions/pagination.actions";
import { usePaginationContext } from "../Pagination/hooks/usePaginationContext";
import { Color } from "src/enums/color.enum";

export const PageSetter: React.FC = () => {
  const [state, dispatch] = usePaginationContext();

  const pages = Array.from(Array(state.maxPages).keys(), (item) => item + 1);

  const handleDecrementPage = () => {
    if (state.page === 0) return;

    setPage(dispatch, state.page - 1);
  };

  const handleIncrementPage = () => {
    if (state.page === state.maxPages - 1) return;

    setPage(dispatch, state.page + 1);
  };

  return (
    <Wrapper>
      <ArrowIcon src={paginationarrow} onClick={handleDecrementPage} />
      {pages.map((page) => {
        return (
          <PageNumber
            activeColor={state.page + 1 === page ? `${Color.Red}` : null}
            key={page}
            onClick={() => setPage(dispatch, page - 1)}
          >
            {page}
          </PageNumber>
        );
      })}
      <ArrowIcon src={paginationarrow} onClick={handleIncrementPage} />
    </Wrapper>
  );
};
