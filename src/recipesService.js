import axios from "axios";

// URL for our node express running locally
// const BASE_URL = "http://localhost:3003";
const BASE_URL = "https://austins-recipe-book-api.herokuapp.com";

const getRecipes = () => {
  return axios.get(`${BASE_URL}/api/recipe`);
};

const getRecipe = (recipeId) => {
  return axios.get(`${BASE_URL}/api/recipe/${recipeId},`);
};

const createRecipe = (recipe) => {
  return axios.post(`${BASE_URL}/api/recipe`, recipe);
};

const updateRecipe = (recipeId, recipe) => {
  return axios.put(`${BASE_URL}/api/recipe/${recipeId}`, recipe);
};

const deleteRecipe = (recipeId) => {
  return axios.delete(`${BASE_URL}/api/recipe/${recipeId}`);
};
export { getRecipes, createRecipe, updateRecipe, deleteRecipe, getRecipe };
