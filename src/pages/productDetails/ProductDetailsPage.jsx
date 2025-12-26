import PageTransition from "../../components/common/PageTransition";
import ProductDetails from "../../components/productDetails/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <main>
      <PageTransition>
        <ProductDetails />
      </PageTransition>
    </main>
  );
};

export default ProductDetailsPage;
