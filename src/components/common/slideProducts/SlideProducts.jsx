import { memo, useCallback } from "react";
import useFetch from "../../../hooks/useFetch";
import Products from "../products/Products";
import { getProductsByCategory } from "../../../services/category.service";

//  Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import "./slideProducts.css";

const SlideProducts = ({ category }) => {
  // fetch products
  const fetchProducts = useCallback(
    () => getProductsByCategory(category),
    [category]
  );

  const { data, loading, error } = useFetch(fetchProducts, [category]);

  const swiperBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      navigation: false,
    },
    576: { slidesPerView: 2, spaceBetween: 15, centeredSlides: false },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: false,
      navigation: true,
    },
    1024: { slidesPerView: 4, spaceBetween: 20, centeredSlides: false },
    1200: { slidesPerView: 5, spaceBetween: 20, centeredSlides: false },
  };

  const slidesPerView = 4;
  const productsLength = data?.products?.length || 0;
  const shouldLoop = productsLength >= slidesPerView;

  return (
    <section className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h3>{category.replace("-", " ")}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Swiper
            loop={shouldLoop}
            navigation={shouldLoop}
            touchRatio={1.5}
            grabCursor={true}
            autoplay={
              shouldLoop ? { delay: 2500, disableOnInteraction: false } : false
            }
            // spaceBetween={20}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={swiperBreakpoints}
          >
            {data?.products?.map((product) => (
              <SwiperSlide key={product.id} className="swiper_product">
                <Products product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default memo(SlideProducts);
