import { memo } from "react";
import Image from "../Image";

import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";

import "./products.css";

const Products = ({ product }) => {
  console.log(product);
  return (
    <div className="product">
      <div className="img_product">
        <Image src={product.images[0]} alt="" />
      </div>

      <p className="name_product">{product.title}</p>

      <p className="product_desc">{product.description.slice(0, 40) + "..."}</p>

      <div className="product_rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="product_price">
        <span>$</span> {product.price}
      </p>

      <div className="product_icons">
        <span className="icon">
          <FaRegHeart />
        </span>
        <span className="icon">
          <FaShare />
        </span>
        <span className="icon">
          <FaCartArrowDown />
        </span>
      </div>
    </div>
  );
};

export default memo(Products);
