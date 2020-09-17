import React from "react";
import Recipe from "./Recipe";
import "./RecipeGrid.css";

function RecipeGrid({ recipes }) {
  return (
    <div className="recipe-grid-container">
      {recipes && recipes.length
        ? recipes.map((recipe) => {
            return <Recipe recipe={recipe} key={recipe._id} />;
          })
        : null}
    </div>
  );
}

export default RecipeGrid;
