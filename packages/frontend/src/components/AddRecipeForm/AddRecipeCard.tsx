import { IRecipe } from "../../../../shared/src/types/recipe.type";
import { Wrapper } from "./AddRecipeCard.styled";

export const AddRecipeCard: React.FC<IRecipe> = ({
  title,
  description,
  prepTimeMin,
  prepTimeMax,
  servings,
  photoUrl,
  ingredients,
}) => (
  <Wrapper>
    <h2>Title : {title}</h2>
    <p>Description: {description}</p>
    <p>Min. Prep. Time: {prepTimeMin}</p>
    <p>Max. Prep. Time: {prepTimeMax}</p>
    <p>No. servings: {servings}</p>
    <p>Ingredients:</p>
    <img src={photoUrl} alt={title} />
    <ul>
      {ingredients.map((ingredient) => (
        <li>{ingredient}</li>
      ))}
    </ul>
  </Wrapper>
);
