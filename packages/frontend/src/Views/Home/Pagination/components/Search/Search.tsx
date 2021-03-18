import { Wrapper, Icon, StyledInput } from "./Search.styled";
import loupe from "src/assets/images/loupe.svg";
import { setFilterText } from "src/Views/Home/Pagination/reducer/actions/pagination.actions";
import { usePaginationContext } from "src/Views/Home/Pagination/hooks/usePaginationContext";
import debounce from "lodash.debounce";
import { useRef } from "react";

export const Search = () => {
  const [, dispatch] = usePaginationContext();

  const debounced = useRef(debounce((nextText) => setFilterText(dispatch, nextText), 1000)).current;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const text = e.currentTarget.value;
    debounced(text);
  };

  return (
    <Wrapper>
      <Icon src={loupe} />
      <StyledInput onChange={(e) => handleChange(e)} placeholder="Search for recipes..." />
    </Wrapper>
  );
};
