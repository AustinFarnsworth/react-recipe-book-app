import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import App from "./App";
import RecipePage from "./pages/RecipePage";
import Breakfast from "./pages/Breakfast";
import Lunch from "./pages/Lunch";
import Dinner from "./pages/Dinner";

const routes = (
  <Router>
    <NavBar />
    <Route exact path="/" component={App} />
    <Route path="/recipe/:recipeId" component={RecipePage} />

    <Route path="/breakfast" component={Breakfast} />
    <Route path="/lunch" component={Lunch} />
    <Route path="/dinner" component={Dinner} />
  </Router>
);

export default routes;
