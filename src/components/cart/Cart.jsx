import "./cart.css";

import useCartStore from "../../store/cart.store";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, getTotal } = useCartStore();

  return (
    <section className="checkout">
      <div className="order_summary">
        <h2>Order Summary</h2>

        <div className="items">
          {cart.length === 0 ? (
            <p className="empty">
              Your cart is empty 😔:
              <Link to="/" className="btn">
                Shop Now
              </Link>
            </p>
          ) : (
            cart.map((product) => (
              <CartItem key={product.id} product={product} />
            ))
          )}
        </div>

        <div className="bottom_summary">
          <div className="shop_table">
            <p>Total :</p>
            <span className="total_checkout">${getTotal().toFixed(2)}</span>
          </div>

          <div className="bottom_div">
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
