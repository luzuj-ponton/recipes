import { AddRecipeForm } from "src/components/AddRecipeForm/AddRecipeForm";
import { FlexContainer } from "src/components/Containers/Containers.styles";

export const AddRecipe: React.FC = () => {
  return (
    <FlexContainer direction="column">
      <h1>Add Recipe</h1>
      <AddRecipeForm />
    </FlexContainer>
  );
};
