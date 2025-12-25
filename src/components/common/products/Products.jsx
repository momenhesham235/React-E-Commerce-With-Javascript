import { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

import Image from "../Image";

import { FaStar, FaRegStarHalfStroke, FaCheck } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";

import "./products.css";
import useCartStore from "../../../store/cart.store";
import toast from "react-hot-toast";

const Products = ({ product }) => {
  const { cart, addToCart } = useCartStore();

  const isInCart = cart.some((item) => item.id === product.id);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);

    toast.success(
      <div className="toast-wrapper">
        <img
          src={product.images[0]}
          alt={product.title}
          className="toast-img"
        />

        <div className="toast-content">
          <strong>{product.title}</strong>
          added to Cart
          <div>
            <button className="btn" onClick={() => navigate("/cart")}>
              View Cart
            </button>
          </div>
        </div>
      </div>,
      { duration: 3500 }
    );
  };

  return (
    <div className={`product ${isInCart ? "inCart" : ""}`}>
      <Link to={`/product/${product.id}`}>
        <span className="status_cart">
          <FaCheck />
          In Cart
        </span>

        <div className="img_product">
          <Image src={product.images[0]} alt={product.title} />
        </div>

        <p className="name_product">{product.title.slice(0, 15) + "..."}</p>

        <p className="product_desc">
          {product.description.slice(0, 35) + "..."}
        </p>

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
      </Link>

      <div className="product_icons">
        <span className="icon" onClick={handleAddToCart}>
          <FaCartArrowDown />
        </span>
        <span className="icon">
          <FaRegHeart />
        </span>
        <span className="icon">
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default memo(Products);
