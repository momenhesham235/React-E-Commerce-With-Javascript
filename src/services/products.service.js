import baseUrl from "./base.api";

export const getProductById = (id) => {
  return baseUrl.get(`/products/${id}`);
};

export const searchProducts = (query) => {
  return baseUrl.get(`/products/search?q=${query}`);
};
