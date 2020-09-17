import React from "react";
import "./App.css";
import RecipeGrid from "./components/RecipeGrid";
import Modal from "./components/Modal";
import AddEditRecipeForm from "./components/AddEditRecipeForm";
import { getRecipes, createRecipe } from "./recipesService";

function App() {
  const [recipes, setRecipes] = React.useState(() => {
    fetchRecipes();

    return [];
  });
  const [
    isShowingAddEditRecipeModal,
    setIsShowingAddEditRecipeModal,
  ] = React.useState(true);

  function fetchRecipes() {
    getRecipes()
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        debugger;
      });
  }

  function handleAddRecipeClick() {
    setIsShowingAddEditRecipeModal(true);
  }

  function handleCloseModal() {
    setIsShowingAddEditRecipeModal(false);
  }

  function handleCreateRecipe(recipe) {
    createRecipe(recipe)
      .then((response) => {
        setIsShowingAddEditRecipeModal(false);
        alert("Successfully Created Recipe");
        fetchRecipes();
      })
      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="App">
      <button onClick={handleAddRecipeClick}>Add New Recipe</button>
      {isShowingAddEditRecipeModal ? (
        <Modal>
          <AddEditRecipeForm
            handleCloseModal={handleCloseModal}
            handleCreateRecipe={handleCreateRecipe}
          />
        </Modal>
      ) : null}

      <h1>Austins Recipe Book</h1>
      <RecipeGrid recipes={recipes} />
    </div>
  );
}

export default App;
