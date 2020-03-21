import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Error from "./components/error/Error";
import Breakfast from "./components/Breakfast/Breakfast";
import Lunch from "./components/Lunch/Lunch";
import Dinner from "./components/Dinner/Dinner";
import Home from "./components/Home/Home";
import MenuItem from "./components/menuItem/MenuItem";
import OrderComplite from "./components/ordercomplite/OrderComplite";
import Placeorder from "./components/placeorder/Placeorder";
import SignUp from "./components/signup/SignUp";
import Cart from "./components/Cart/Cart";
import Login from "./components/LogIn/Login";
import Navi from "./components/nav/Navi";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Navi></Navi>
        <Switch>
          <Route path="/breakfast">
            <Breakfast></Breakfast>
          </Route>
          <Route path="/lunch">
            <Lunch></Lunch>
          </Route>
          <Route path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/menuitem">
            <MenuItem></MenuItem>
          </Route>
          <Route path="/ordercomplite">
            <OrderComplite></OrderComplite>
          </Route>
          <Route path="/placeorder">
            <Placeorder></Placeorder>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route path="/cart">
            <Cart></Cart>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
