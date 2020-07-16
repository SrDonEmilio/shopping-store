import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./header.scss";

import Logo from "../../images/logo.png";
import CartIcon from "../../images/icons/icons8-shopping-cart-100.png";
import { NavLink } from "react-router-dom";

const Header = () => {
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
            <NavLink exact to="/cart">
              <img
                className="cart-icon box-shadow"
                src={CartIcon}
                alt="Cart Icon"
              ></img>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
