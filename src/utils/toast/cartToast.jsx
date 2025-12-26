import toast from "react-hot-toast";

export const showAddToCartToast = (product, navigate) => {
  toast.success(
    <div className="toast-wrapper">
      <img src={product.images[0]} alt={product.title} className="toast-img" />

      <div className="toast-content">
        <strong>{product.title}</strong>
        <p>added to cart</p>

        <button className="btn" onClick={() => navigate("/cart")}>
          View Cart
        </button>
      </div>
    </div>,
    { duration: 3000 }
  );
};
