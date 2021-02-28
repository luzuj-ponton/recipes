import { Formik, FormikProps } from "formik";
import React from "react";
import { Button } from "src/common/ui/Button.styled";
import { IRecipe } from "../../../../shared/src/types/recipe.type";
import { FormArrayInput } from "../FormArrayInput/FormArrayInput";
import { FormInput } from "../FormInput/FormInput";
import { AddRecipeCard } from "./AddRecipeCard";
import { StyledForm } from "./AddRecipeForm.styled";

const recipeFormData = [
  { label: "Title", key: "title" },
  { label: "Description", key: "description" },
  { label: "Image (url)", key: "photoUrl" },
  { label: "Minimum prep. time (mins.)", key: "prepTimeMin" },
  { label: "Maximum prep. time (mins.)", key: "prepTimeMax" },
  { label: "Servings", key: "servings" },
];

const initialValues: IRecipe = {
  title: "",
  description: "",
  prepTimeMax: 60,
  prepTimeMin: 10,
  servings: 2,
  photoUrl: "",
  ingredients: [],
  steps: [],
};

export const AddRecipeForm: React.FC = () => {
  const handleAddRecipe = (values: IRecipe) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleAddRecipe}>
      {({ values, getFieldProps, getFieldMeta }: FormikProps<IRecipe>) => (
        <StyledForm>
          <div>
            {recipeFormData.map(({ key, label }) => (
              <FormInput key={key} label={label} {...getFieldProps(key)} {...getFieldMeta(key)} />
            ))}
            <FormArrayInput values={values["ingredients"]} label="Ingredients" id="ingredients" />
            <Button variant="secondary" type="submit" width={200}>
              Submit
            </Button>
          </div>
          <AddRecipeCard {...values} />
        </StyledForm>
      )}
    </Formik>
  );
};
