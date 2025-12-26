import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cart.store";
import { showAddToCartToast } from "../utils/toast/cartToast";

const useAddToCart = () => {
  const { addToCart, isInCart } = useCartStore();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const alreadyInCart = isInCart(product.id);

    addToCart(product);

    if (!alreadyInCart) {
      showAddToCartToast(product, navigate);
    }
  };

  return {
    handleAddToCart,
    isInCart,
  };
};

export default useAddToCart;
