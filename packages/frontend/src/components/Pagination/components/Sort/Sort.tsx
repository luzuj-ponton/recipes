import { Select } from "./Sort.styled";
import { usePaginationContext } from "src/components/Pagination/hooks/usePaginationContext";
import { setSort } from "src/components/Pagination/reducer/actions/pagination.actions";
import { options } from "./config";

export const Sort: React.FC = () => {
  const [, dispatch] = usePaginationContext();

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;

    const selectedOption = options.find((option) => option.text === value);

    selectedOption && setSort(dispatch, selectedOption.value);
  };

  return (
    <Select onChange={handleChange}>
      {options.map((option) => (
        <option key={option.text} value={option.text}>
          {option.text}
        </option>
      ))}
    </Select>
  );
};
