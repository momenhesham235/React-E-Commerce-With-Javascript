import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],

      // ➕ Add to cart
      addToCart: (product) => {
        const cart = get().cart;
        const existing = cart.find((item) => item.id === product.id);

        if (existing) {
          set({
            cart: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: [...cart, { ...product, quantity: 1 }],
          });
        }
      },

      // ❌ Remove
      removeFromCart: (product) =>
        set({
          cart: get().cart.filter((item) => item.id !== product.id),
        }),

      // ➕ Quantity
      increaseQuantity: (id) =>
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }),

      // ➖ Quantity
      decreaseQuantity: (id) =>
        set({
          cart: get().cart.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }),

      // 🛒
      isInCart: (id) => get().cart.some((item) => item.id === id),

      // 🗑 Clear
      clearCart: () => set({ cart: [] }),

      // 🧮 Total
      getTotal: () =>
        get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }),

    {
      name: "cart-storage",
      partialize: (state) => ({ cart: state.cart }),
    }
  )
);

export default useCartStore;
