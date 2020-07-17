import React, { useEffect } from "react";

import { Container, Row } from "react-bootstrap";

import "./ProductView.scss";

const ProductView = ({ title, price, description, image, className }) => {
  useEffect(() => {});
  return (
    <div className={`product-view ` + className}>
      <Container>
        <Row>
          <h2>Product Detail</h2>
        </Row>
        <div className="product-detail">
          <div className="product-image mb-3">
            <img src={image} alt="Imagen del Producto" />
          </div>
          <div className="product-description">
            <h2 className="product-title">
              {title}
              <span className="price">${price}</span>
            </h2>
            <p className="product-description">{description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductView;
