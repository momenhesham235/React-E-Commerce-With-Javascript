import "./skeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <section className="item_details">
      <div className="container">
        <div className="item_details_wrapper">
          {/* Images Skeleton */}
          <div className="img_item">
            <div className="skeleton skeleton-img-lg"></div>

            <div className="small_img">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="skeleton skeleton-img-sm"></div>
              ))}
            </div>
          </div>

          {/* Details Skeleton */}
          <div className="details_item">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-stars"></div>
            <div className="skeleton skeleton-price"></div>

            <div className="skeleton skeleton-line"></div>
            <div className="skeleton skeleton-line"></div>
            <div className="skeleton skeleton-desc"></div>

            <div className="skeleton skeleton-btn"></div>

            <div className="item_icons">
              <div className="skeleton skeleton-icon"></div>
              <div className="skeleton skeleton-icon"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;
