import { AddRecipeForm } from "src/components/AddRecipeForm/AddRecipeForm";
import { FlexContainer } from "src/components/Containers/Containers.styles";

export const AddRecipe: React.FC = () => {
  return (
    <FlexContainer direction="column">
      <AddRecipeForm />
    </FlexContainer>
  );
};
