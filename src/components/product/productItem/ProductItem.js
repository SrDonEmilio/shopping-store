import React from "react";
import { Col } from "react-bootstrap";

import "./productItem.scss";

const ProductItem = ({ title, description, price, image }) => {
  return (
    <Col>
      <div className="product-item box-shadow">
        <div className="product-image">
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
    </Col>
  );
};

export default ProductItem;
