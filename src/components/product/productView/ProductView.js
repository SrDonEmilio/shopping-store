import React, { useEffect } from "react";

import "./productView.scss";

const ProductView = ({title, price, description, image}) => {
  useEffect(() => {
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".product-view").classList.remove("show");
    });
    document
      .querySelector(".inactive-section")
      .addEventListener("click", () => {
        document.querySelector(".product-view").classList.remove("show");
      });
  });
  return (
    <div className="product-view">
      <div className="inactive-section"></div>
      <div className="content">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="product-detail">
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
      </div>
    </div>
  );
};

export default ProductView;
