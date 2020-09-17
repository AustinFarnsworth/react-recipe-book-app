import axios from "axios";

// URL for our node express running locally
const BASE_URL = "http://localhost:3003";

const getRecipes = () => {
  return axios.get(`${BASE_URL}/api/recipe`);
};

const createRecipe = (recipe) => {
  return axios.post(`${BASE_URL}/api/recipe`, recipe);
};

export { getRecipes, createRecipe };
