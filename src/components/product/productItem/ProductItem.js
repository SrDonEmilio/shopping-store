import React from "react";
import { Col, Button } from "react-bootstrap";

import "./productItem.scss";
import { useDispatch } from "react-redux";
import { cart_add_product_action } from "../../../redux/actions/cartActions";

import imageDemo from '../../../images/sample/Drone1.png'

const ProductItem = (props) => {
  const dispatch = useDispatch();
  return (
    <Col>
      <div className="product-item box-shadow">
        <div className="product-image">
          <img src={imageDemo} alt="Imagen del Producto" />
        </div>
        <div className="product-description">
          <h2 className="product-title">
            {props.product.name}
            <span className="price">${props.product.price}</span>
            <span className="price">Stock: {props.product.price}</span>
          </h2>
          <Button
            onClick={() => {
              dispatch(cart_add_product_action({ quantity: 1 }));
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default ProductItem;
