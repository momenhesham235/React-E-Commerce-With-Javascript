import baseUrl from "./base.api";

export const getCategories = async () => {
  const res = await baseUrl.get("products/categories");
  return res.data;
};

export const getProductsByCategory = async (category) => {
  const res = await baseUrl.get(`products/category/${category}`);
  return res.data;
};
