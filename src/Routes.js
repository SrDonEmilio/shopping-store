import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/HomePage";
import CartPage from "./components/cart/cartPage/CartPage";
import AddProductPage from "./components/admin/AddProductPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/cart">
        <CartPage />
      </Route>
      <Route exact path="/admin">
        <AddProductPage />
      </Route>
    </Switch>
  );
}
