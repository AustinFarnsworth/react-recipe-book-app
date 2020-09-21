import React from "react";

import RecipeGrid from "../components/RecipeGrid";

function Breakfast(props) {
  return (
    <div className="recipe-page">
      {/* {recipe ? ( */}
      <>
        <h1>Breakfast Recipes</h1>
        {/* <h3>{recipe.name}</h3>
        <h3>{recipe.ingredients}</h3>
        <h3>{recipe.instructions}</h3> */}
      </>
      {/* ) : null} */}
      <RecipeGrid />
    </div>
  );
}
export default Breakfast;
