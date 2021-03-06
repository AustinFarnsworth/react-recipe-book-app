import React from "react";
import "./AddEditRecipeForm.css";
import categories from "../categories.json";

function AddEditRecipeForm({
  handleCloseModal,
  handleCreateRecipe,
  existingRecipe,
  handleUpdateRecipe,
  handleDeleteRecipe,
}) {
  const [name, setName] = React.useState(
    existingRecipe ? existingRecipe.name : ""
  );
  const [ingredients, setIngredients] = React.useState(
    existingRecipe ? existingRecipe.ingredients : ""
  );
  const [instructions, setInstructions] = React.useState(
    existingRecipe ? existingRecipe.instructions : ""
  );
  const [category, setCategory] = React.useState(
    existingRecipe ? existingRecipe.category : ""
  );
  const [errors, setErrors] = React.useState({
    name: null,
    ingredients: null,
    instructions: null,
    category: null,
  });

  function handleSubmit(event) {
    event.preventDefault();

    const errors = {
      name: null,
      ingredients: null,
      instructions: null,
      category: null,
    };

    if (name.length === 0) {
      errors.name = "Recipe Name Cannot Be Empty";
    }

    if (ingredients.length === 0) {
      errors.ingredients = "Ingredients List Cannont Be Empty";
    }

    if (instructions.length === 0) {
      errors.instructions = "Instructions Cannont Be Empty";
    }

    if (category.length === 0) {
      errors.category = "Category Cannot be Empty";
    }

    if (
      errors.name ||
      errors.ingredients ||
      errors.instructions ||
      errors.category
    ) {
      setErrors(errors);
      return;
    }

    const recipe = {
      name: name,
      ingredients: ingredients,
      instructions: instructions,
      category: category,
    };

    if (existingRecipe) {
      recipe._id = existingRecipe._id;
      handleUpdateRecipe(recipe);
    } else {
      handleCreateRecipe(recipe);
    }
  }

  return (
    <div className="add-edit-recipe-form">
      <h1>{existingRecipe ? "Edit Recipe" : "Create Recipe"}</h1>
      <form onSubmit={handleSubmit} className="recipe-form">
        <label>
          Recipe Name<span className="required">*</span>:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "invalid" : ""}
          />
          {errors.name ? <span className="required">{errors.name}</span> : null}
          <label />
          Ingredients<span className="required">*</span>:
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={errors.ingredients ? "invalid" : ""}
          />
          {errors.ingredients ? (
            <span className="required">{errors.ingredients}</span>
          ) : null}
        </label>
        <label>
          Instructions<span className="required">*</span>:
          <input
            type="text"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            className={errors.instructions ? "invalid" : ""}
          />
          {errors.instructions ? (
            <span className="required">{errors.ingredients}</span>
          ) : null}
        </label>
        <label>
          Category<span className="required">*</span>:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={errors.category ? "invalid" : ""}
          >
            <option value=""></option>
            {categories.map((category) => {
              return (
                <option value={category.value} key={category.value}>
                  {category.label}
                </option>
              );
            })}
          </select>
          {errors.category ? (
            <span className="required">{errors.category}</span>
          ) : null}
        </label>
        <button>{existingRecipe ? "Save & Close" : "Create & Close"}</button>
      </form>
      <button onClick={handleCloseModal}>Close</button>
      {existingRecipe ? (
        <button onClick={() => handleDeleteRecipe(existingRecipe)}>
          Delete
        </button>
      ) : null}
    </div>
  );
}
export default AddEditRecipeForm;
