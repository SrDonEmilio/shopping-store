import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import ProductItem from "../product/productItem/ProductItem";
import ProductView from "../product/productView/ProductView";

import "./home.scss";

import ImageRobot1 from "../../images/sample/Robot-Free-PNG.png";
import ImageRobot2 from "../../images/sample/Robot-No-Background.png";
import ImageRobot3 from "../../images/sample/Robot-PNG-Clipart-Background.png";

const HomePage = () => {
  useEffect(() => {
    document.querySelectorAll(".product-item").forEach((item) => {
      item.addEventListener("click", () => {
        document.querySelector(".product-view").classList.add("show");
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
          <ProductItem
            title="Robot"
            price="23"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati ut sed libero aspernatur iure non. Perspiciatis, repudiandae debitis?"
            image={ImageRobot1}
          />
          <ProductItem
            title="Robot"
            price="23"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati ut sed libero aspernatur iure non. Perspiciatis, repudiandae debitis?"
            image={ImageRobot2}
          />
          <ProductItem
            title="Robot"
            price="23"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati ut sed libero aspernatur iure non. Perspiciatis, repudiandae debitis?"
            image={ImageRobot3}
          />
        </Row>
      </Container>
      <ProductView
        title="Robot"
        price="23"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati ut sed libero aspernatur iure non. Perspiciatis, repudiandae debitis?"
        image={ImageRobot3}
      />
    </div>
  );
};

export default HomePage;
