import React from "react";
import Cart from "../Cart";
import { Container, Row } from "react-bootstrap";

const CartView = (props) => {
  return (
    <div className={`cart-view ` + props.className}>
      <Container>
        <Row>
          <h2>Cart</h2>
        </Row>
        <Cart />
      </Container>
    </div>
  );
};

export default CartView;
