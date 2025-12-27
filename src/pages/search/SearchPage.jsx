import { useSearchParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { searchProducts } from "../../services/products.service";

import Products from "../../components/common/products/Products";
import ProductCardSkeleton from "../../components/skeleton/ProductCardSkeleton";
import PageTransition from "../../components/common/PageTransition";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const { data, loading, error } = useFetch(
    () => searchProducts(query),
    [query]
  );

  if (error) return <p style={{ padding: "20px", color: "red" }}>{error}</p>;
  return (
    <PageTransition key={query}>
      <section className="category_products">
        <div className="container">
          <div className="top_slide">
            <h3>Search Results for "{query}"</h3>
            <p> {data?.data?.products?.length} products </p>
          </div>

          <div className="products">
            {loading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))
              : data?.data?.products?.map((product) => (
                  <Products key={product.id} product={product} />
                ))}

            {!loading && data?.data?.products?.length === 0 && (
              <p className="no_products">
                No {query} found in this category 🛒
              </p>
            )}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default SearchResults;
