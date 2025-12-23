import baseUrl from "./base.api";

export const getProducts = () => {
  return baseUrl.get("/products");
};

export const getProduct = (id) => {
  return baseUrl.get(`/products/${id}`);
};

export const searchProducts = (query) => {
  return baseUrl.get(`/products/search?q=${query}`);
};
