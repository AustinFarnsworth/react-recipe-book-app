import React from "react";
import { getRecipe } from "../recipesService";

function RecipePage(props) {
  const recipeId = props.match.params.recipeId;

  const [recipe, setRecipe] = React.useState(null);
  React.useEffect(() => {
    getRecipe(recipeId)
      .then((response) => {
        const recipe = response.data;
        setRecipe(recipe);
      })
      .catch((error) => {
        alert(`No recipe with ID of '${recipeId}' exists`);
      });
  }, [recipeId]);

  return (
    <div className="recipe-page">
      {recipe ? (
        <>
          <h1>{recipe.name}</h1>
          <h3>{recipe.ingredients}</h3>
          <h5>{recipe.instructions}</h5>
        </>
      ) : null}
    </div>
  );
}

export default RecipePage;
