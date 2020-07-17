import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import "./header.scss";

import Logo from "../../images/logo.png";
import CartIcon from "../../images/icons/icons8-shopping-cart-100.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    document.querySelector('.cart-icon').addEventListener('click', () => {
      document.querySelector(".side-views .cart-view").classList.remove("hide");
      document.querySelector(".side-views").classList.add("show");
    })
  })
  return (
    <header>
      <Container>
        <Row xs={2}>
          <Col sm>
            <NavLink exact to="/">
              <img src={Logo} alt="Logo" />
            </NavLink>
          </Col>
          <Col sm>
            <Button variant="link">
              <img
                className="cart-icon box-shadow"
                src={CartIcon}
                alt="Cart Icon"
              ></img>
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
