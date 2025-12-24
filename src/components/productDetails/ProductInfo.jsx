import { memo } from "react";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
const ProductInfo = ({ product }) => {
  return (
    <div className="details_item">
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

      <button className="btn">
        Add to cart <TiShoppingCart />
      </button>

      <div className="item_icons">
        <span className="item_icon">
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
