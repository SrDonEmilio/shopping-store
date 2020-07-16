import React from "react";
import Cart from "../Cart";
import { Container, Row } from "react-bootstrap";

const CartPage = () => {
  return (
    <Container>
      <Row>
        <h1>Cart</h1>
      </Row>
      <Cart />
    </Container>
  );
};

export default CartPage;
