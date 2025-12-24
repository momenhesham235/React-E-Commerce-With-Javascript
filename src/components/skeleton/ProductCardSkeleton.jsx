const ProductCardSkeleton = () => {
  return (
    <div className="product_skeleton">
      <div className="skeleton_img" />

      <div className="skeleton_body">
        <div className="skeleton_line short" />
        <div className="skeleton_line" />
        <div className="skeleton_line price" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
