import { Select } from "./Sort.styled";
import { usePaginationContext } from "src/Views/Home/Pagination/hooks/usePaginationContext";
import {
  setSortBy,
  setSortType,
} from "src/Views/Home/Pagination/reducer/actions/pagination.actions";
import { options } from "./config";

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
    <Select onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </Select>
  );
};
