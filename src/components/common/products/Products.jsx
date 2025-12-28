import "./products.css";

import { memo } from "react";
import { Link } from "react-router-dom";

import Image from "../Image";

import { FaStar, FaRegStarHalfStroke, FaCheck } from "react-icons/fa6";
import { FaCartArrowDown, FaRegHeart, FaShare } from "react-icons/fa";

import useAddToCart from "../../../hooks/useAddToCart.js";
import useFavoritesStore from "../../../store/favorites.store.js";

const Products = ({ product }) => {
  const { handleAddToCart, isInCart } = useAddToCart();
  const isInCartRes = isInCart(product.id);

  const { addFavorite, isInFavorites } = useFavoritesStore();
  const isInFavoritesRes = isInFavorites(product.id);

  return (
    <div
      className={`product ${isInCartRes ? "inCart" : ""} ${
        isInFavoritesRes ? "inFavorites" : ""
      }`}
    >
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
        <span className="icon" onClick={() => handleAddToCart(product)}>
          <FaCartArrowDown />
        </span>
        <span className="icon" onClick={() => addFavorite(product)}>
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
