import React from "react";
import ProductItem from "../product/productItem/ProductItem";
import { useSelector } from "react-redux";

import Drone1 from "../../images/sample/Drone1.png";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer);
  return (
    <div>
      <ProductItem title="Drone" image={Drone1} />
      {cart.quantity}
    </div>
  );
};

export default Cart;
