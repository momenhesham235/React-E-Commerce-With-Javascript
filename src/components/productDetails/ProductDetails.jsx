import "./productDetails.css";

import { memo } from "react";
import { useParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch";
import { getProductById } from "../../services/products.service";

import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import SlideProducts from "../common/slideProducts/SlideProducts";

const ProductDetails = () => {
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch(() => getProductById(id), [id]);

  const category = product?.data?.category;

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Product not found</div>;
  return (
    <section className="item_details">
      <div className="container">
        <div className="item_details_wrapper">
          <div className="img_item">
            <div className="big_img">
              <img
                id="mainImg"
                src={product?.data?.images[0]}
                alt={product?.data?.title}
              />
            </div>

            <div className="small_img">
              {product?.data?.images.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt={product?.data?.title}
                  onClick={() => (document.getElementById("mainImg").src = img)}
                />
              ))}
            </div>
          </div>

          <div className="details_item">
            <h2 className="item_title">{product?.data?.title}</h2>
            <div className="item_stars">
              {[...Array(5)].map(() => (
                <FaStar key={product?.data?.id} />
              ))}
            </div>

            <p className="item_price">
              <span>$</span> {product?.data?.price}
            </p>

            <h3>
              Availability : <span>{product?.data?.availabilityStatus}</span>
            </h3>
            <h4>
              Brand : <span>{product?.data?.brand}</span>
            </h4>
            <p className="item_desc">{product?.data?.description}</p>
            <h5 className="stock">
              <span>
                Hurry Up! Only {product?.data?.stock} products left in stock.
              </span>
            </h5>

            <button className="btn">
              Add to cart <TiShoppingCart />
            </button>

            <div className="item_icons">
              <span className="item_icon">
                <FaRegHeart />
              </span>
              <span className="item_icon">
                <FaShare />
              </span>
            </div>
          </div>
        </div>

        <SlideProducts category={category} />
      </div>
    </section>
  );
};

export default memo(ProductDetails);
