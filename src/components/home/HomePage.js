import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../product/productItem/ProductItem";
import Sideview from "../sideview/Sideview";

import { useSelector } from "react-redux";

import "./home.scss";

const HomePage = (props) => {
  const listProducts = useSelector((state) => state.productsReducer);
  useEffect(() => {
    document.querySelectorAll(".product-item").forEach((item) => {
      item.addEventListener("click", () => {
        document
          .querySelector(".side-views .product-view")
          .classList.remove("hide");
        document.querySelector(".side-views").classList.add("show");
      });
    });
  });
  return (
    <div>
      <Container className="products-list">
        <Row>
          <h1>Products</h1>
        </Row>
        <Row xs={1} md={2} lg={3}>
          {console.log(listProducts)}
        </Row>
      </Container>
      <Sideview />
    </div>
  );
};

export default HomePage;
