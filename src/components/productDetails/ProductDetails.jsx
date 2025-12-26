import "./productDetails.css";

import { memo } from "react";
import { useParams } from "react-router-dom";

import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import SlideProducts from "../common/slideProducts/SlideProducts";
import ProductDetailsSkeleton from "../skeleton/ProductDetailsSkeleton";

import useFetch from "../../hooks/useFetch";
import { getProductById } from "../../services/products.service";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch(() => getProductById(id), [id]);

  const category = product?.data?.category;

  // if (loading) return <ProductDetailsSkeleton />;

  if (error) return <div>Product not found</div>;
  return (
    <section className="item_details">
      <div className="container">
        {loading ? (
          <ProductDetailsSkeleton />
        ) : (
          <>
            <div className="item_details_wrapper">
              <ProductImages
                images={product.data.images}
                title={product.data.title}
              />

              <ProductInfo product={product.data} />
            </div>
          </>
        )}

        <SlideProducts category={category} />
      </div>
    </section>
  );
};

export default memo(ProductDetails);
