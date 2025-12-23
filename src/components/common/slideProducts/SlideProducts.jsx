import Products from "../products/Products";

//  Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import "./slideProducts.css";

const SlideProducts = ({ title }) => {
  return (
    <section className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h3>{title}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <Swiper
          loop={true}
          slidesPerView={5}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Products />
          </SwiperSlide>
          <SwiperSlide>
            <Products />
          </SwiperSlide>
          <SwiperSlide>
            <Products />
          </SwiperSlide>
          <SwiperSlide>
            <Products />
          </SwiperSlide>
          <SwiperSlide>
            <Products />
          </SwiperSlide>
          <SwiperSlide>
            <Products />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SlideProducts;
