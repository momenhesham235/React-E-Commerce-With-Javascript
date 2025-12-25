import { memo } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useCartStore from "../../store/cart.store";

const CartItem = ({ product }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCartStore();

  return (
    <div className="cart_item">
      <div className="item_img">
        <img src={product.images[0]} alt={product.title} />

        <div className="item_content">
          <h3>{product.title}</h3>

          <p>
            <span>$</span> {product.price}
          </p>

          <div className="quantity_controls">
            <button
              onClick={() => decreaseQuantity(product.id)}
              disabled={product.quantity === 1}
            >
              -
            </button>

            <span className="quantity">{product.quantity}</span>

            <button onClick={() => increaseQuantity(product.id)}>+</button>
          </div>
        </div>
      </div>

      <button className="remove_item" onClick={() => removeFromCart(product)}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default memo(CartItem);
