import { memo } from "react";
import { Link } from "react-router-dom";

import Image from "../Image";

import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";

import "./products.css";

const Products = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product">
      <div className="img_product">
        <Image src={product.images[0]} alt={product.title} />
      </div>

      <p className="name_product">{product.title.slice(0, 15) + "..."}</p>

      <p className="product_desc">{product.description.slice(0, 35) + "..."}</p>

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
    </Link>
  );
};

export default memo(Products);
