import React from "react";
import "./App.scss";
import RecipeGrid from "./components/RecipeGrid";
import Modal from "./components/Modal";
import AddEditRecipeForm from "./components/AddEditRecipeForm";
import LoadingSpinner from "./components/LoadingSpinner";
import {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from "./recipesService";

function App() {
  const [
    isShowingAddEditRecipeModal,
    setIsShowingAddEditRecipeModal,
  ] = React.useState(false);
  const [currentRecipe, setIsCurrentRecipe] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [recipes, setRecipes] = React.useState(() => {
    fetchRecipes();

    return [];
  });

  function fetchRecipes() {
    setIsLoading(true);

    getRecipes()
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        debugger;
      })
      .finally(() => {
        setIsLoading(false);
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

  function handleEditRecipe(recipe) {
    setIsCurrentRecipe(recipe);
    setIsShowingAddEditRecipeModal(true);
  }

  function handleUpdateRecipe(recipe) {
    updateRecipe(recipe._id, recipe)
      .then((response) => {
        setIsShowingAddEditRecipeModal(false);
        alert("Successfully Updated Recipe");
        fetchRecipes();
      })
      .catch((error) => {
        alert(error);
      });
  }
  function handleDeleteRecipe(recipe) {
    deleteRecipe(recipe._id)
      .then((response) => {
        setIsShowingAddEditRecipeModal(false);
        alert("Succesfully Deleted Recipe");
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
            existingRecipe={currentRecipe}
            handleCloseModal={handleCloseModal}
            handleCreateRecipe={handleCreateRecipe}
            handleUpdateRecipe={handleUpdateRecipe}
            handleDeleteRecipe={handleDeleteRecipe}
          />
        </Modal>
      ) : null}

      <h1 className="App-header">Austins Recipe Book</h1>
      {isLoading ? <LoadingSpinner isLoading={isLoading} /> : null}

      <RecipeGrid recipes={recipes} handleEditRecipe={handleEditRecipe} />
    </div>
  );
}

export default App;
