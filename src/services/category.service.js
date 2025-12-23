import baseUrl from "./base.api";

export const getCategories = async () => {
  const res = await baseUrl.get("products/categories");
  return res.data;
};

export const getCategory = async (id) => {
  const res = await baseUrl.get(`products/category/${id}`);
  return res.data;
};
