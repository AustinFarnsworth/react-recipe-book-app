import React from "react";
import "./Recipe.css";

function Recipe({ recipe }) {
  return (
    <div className="recipe-container">
      <div>{recipe.name}</div>
      <div>{recipe.ingredients}</div>
      <div>{recipe.instructions}</div>
    </div>
  );
}

export default Recipe;
