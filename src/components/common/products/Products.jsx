import Image from "../Image";

import { FaStar, FaRegStarHalfStroke } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";

import "./products.css";

const Products = () => {
  return (
    <div className="product">
      <div className="img_product">
        <Image
          src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
          alt=""
        />
      </div>

      <p className="name_product">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni harum id
        laborum!
      </p>

      <div className="product_rating">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>

      <p className="product_price">
        <span>$</span> 100
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

export default Products;
