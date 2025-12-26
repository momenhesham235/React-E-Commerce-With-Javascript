import "./Category.css";

import Products from "../common/products/Products";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { getProductsByCategory } from "../../services/category.service";

import PageTransition from "../common/PageTransition";
import ProductsSkeleton from "../skeleton/ProductCardSkeleton";

const Category = () => {
  const { category } = useParams();
  const { data, loading, error } = useFetch(
    () => getProductsByCategory(category),
    [category]
  );

  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;

  return (
    <PageTransition key={category}>
      <section className="category_products">
        <div className="container">
          <div className="top_slide">
            <h3>{category?.replace("-", " ")}</h3>
            <p> {data?.products?.length} products </p>
          </div>

          <div className="products">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <ProductsSkeleton key={i} />
                ))
              : data?.products?.map((product) => (
                  <Products key={product.id} product={product} />
                ))}

            {!loading && data?.products?.length === 0 && (
              <p className="no_products">
                No products found in this category 🛒
              </p>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Category;
