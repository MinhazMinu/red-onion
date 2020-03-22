import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Adding All COmponents

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Foods from "./components/Foods/Foods";
import AllFeatures from "./components/AllFeatures/AllFeatures";
import FoodDetails from "./components/FoodDetails/FoodDetails";

function App() {
  return (
    <Router>
      <div className="globalStyle">
        <Navbar></Navbar>
        <Switch>
          <Route path="/login"></Route>
          <Route exact path="/">
            <Hero></Hero>
            <Foods></Foods>
            <AllFeatures></AllFeatures>
          </Route>
          <Route path="/food/:id">
            <FoodDetails></FoodDetails>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
