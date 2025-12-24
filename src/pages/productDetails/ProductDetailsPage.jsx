import { useLayoutEffect } from "react";
import ProductDetails from "../../components/productDetails/ProductDetails";

const ProductDetailsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <main>
      <ProductDetails />
    </main>
  );
};

export default ProductDetailsPage;
