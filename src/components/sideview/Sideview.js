import React, { useEffect } from "react";

import ProductView from "../product/productView/ProductView";
import CartView from "../cart/cartView/CartView";

import "./Sideview.scss";

import ImageRobot3 from "../../images/sample/Robot3.png";

const Sideview = () => {
  useEffect(() => {
      const closeSide = () => {
        document.querySelector(".side-views").classList.remove("show");
        document.querySelectorAll(".side-view").forEach(sideItem => {
            sideItem.classList.add('hide')
        })
      }
    document.querySelector(".close").addEventListener("click", () => {
      closeSide()
    });
    document
      .querySelector(".inactive-section")
      .addEventListener("click", () => {
        closeSide()
      });
  });
  return (
    <div className="side-views">
      <div className="inactive-section"></div>
      <div className="content">
        <button type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <ProductView
          title="Robot"
          price="23"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum obcaecati ut sed libero aspernatur iure non. Perspiciatis, repudiandae debitis?"
          image={ImageRobot3}
          className="side-view hide"
        />
        <CartView className="side-view hide" />
      </div>
    </div>
  );
};

export default Sideview;
