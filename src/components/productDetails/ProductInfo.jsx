import { memo } from "react";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import useAddToCart from "../../hooks/useAddToCart";
import useFavoritesStore from "../../store/favorites.store";
const ProductInfo = ({ product }) => {
  const { handleAddToCart, isInCart } = useAddToCart();
  const isInCartRes = isInCart(product.id);

  const { addFavorite, isInFavorites } = useFavoritesStore();
  const isInFavoritesRes = isInFavorites(product.id);

  return (
    <div
      className={`details_item ${isInCartRes ? "inCart" : ""} ${
        isInFavoritesRes ? "inFavorites" : ""
      } `}
    >
      <h2 className="item_title">{product.title}</h2>

      <div className="item_stars">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="item_price">
        <span>$</span> {product.price}
      </p>

      <h3>
        Availability : <span>{product.availabilityStatus}</span>
      </h3>

      <h4>
        Brand : <span>{product.brand}</span>
      </h4>

      <p className="item_desc">{product.description}</p>

      <h5 className="stock">
        Hurry Up! Only {product.stock} products left in stock.
      </h5>

      <button className="btn" onClick={() => handleAddToCart(product)}>
        {isInCartRes ? "In Cart" : "Add to Cart"} <TiShoppingCart />
      </button>

      <div className="item_icons">
        <span className="item_icon" onClick={() => addFavorite(product)}>
          <FaRegHeart />
        </span>
        <span className="item_icon">
          <FaShare />
        </span>
      </div>
    </div>
  );
};

export default memo(ProductInfo);
