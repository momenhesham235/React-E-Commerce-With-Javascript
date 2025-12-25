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
            favorites: favorites.filter((item) => item.id !== product.id),
          });
        } else {
          set({
            favorites: [...favorites, product],
          });
        }
      },
    }),
    {
      name: "favorites",
    }
  )
);

export default useFavoritesStore;
