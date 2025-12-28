import { create } from "zustand";
import { persist } from "zustand/middleware";

const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],

      addFavorite: (product) => {
        const favorites = get().favorites;
        const existing = favorites.find((item) => item.id === product.id);

        if (existing) {
          set({
            cart: favorites.map((item) =>
              item.id === product.id ? { ...item } : item
            ),
          });
        } else {
          set({
            favorites: [...favorites, { ...product, quantity: 1 }],
          });
        }
      },

      removeFavorite: (productId) => {
        set({
          favorites: get().favorites.filter((item) => item.id !== productId),
        });
      },

      isInFavorites: (id) => get().favorites.some((item) => item.id === id),

      getFavorites: () => get().favorites,

      clearFavorites: () => set({ favorites: [] }),

      getFavoritesCount: () => get().favorites.length,
    }),
    {
      name: "favorites",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);

export default useFavoritesStore;
