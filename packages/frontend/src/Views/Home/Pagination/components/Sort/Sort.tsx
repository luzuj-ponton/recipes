import { Select } from "./Sort.styled";
import { usePaginationContext } from "src/Views/Home/Pagination/hooks/usePaginationContext";
import {
  setSortBy,
  setSortType,
} from "src/Views/Home/Pagination/reducer/actions/pagination.actions";

export const Sort: React.FC = () => {
  const [, dispatch] = usePaginationContext();

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    const valuesArr = value.split(" ");
    const sortBy = valuesArr[0];
    const sortType = parseInt(valuesArr[1]);

    setSortBy(dispatch, sortBy);
    setSortType(dispatch, sortType);
  };

  return (
    <>
      <Select onChange={handleChange}>
        <option value="date -1">Date: From newest</option>
        <option value="date 1">Date: From oldest</option>
        <option value="rating 1">Rating: From lowest</option>
        <option value="rating -1">Rating: From highest</option>
      </Select>
    </>
  );
};
