import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ProductCardSkeleton from "./ProductCardSkeleton";

const SlideProductsSkeleton = () => {
  const swiperBreakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    576: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 20 },
    1200: { slidesPerView: 5, spaceBetween: 20 },
  };

  return (
    <Swiper
      loop={false}
      grabCursor={true}
      breakpoints={swiperBreakpoints}
      className="mySwiper"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <SwiperSlide key={index}>
          <ProductCardSkeleton />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(SlideProductsSkeleton);
