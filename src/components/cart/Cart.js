import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer);
  return (
    <div>
      Quantity: {cart.quantity}
    </div>
  );
};

export default Cart;
