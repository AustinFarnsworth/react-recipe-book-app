import React from "react";
import "./Recipe.css";

function Recipe({ recipe, handleEditRecipe }) {
  return (
    <div className="recipe-container">
      <div>{recipe.name}</div>
      {/* <div>{recipe.ingredients}</div> */}
      {/* <div>{recipe.instructions}</div> */}
      <button onClick={() => handleEditRecipe(recipe)}>EDIT</button>
    </div>
  );
}

export default Recipe;
