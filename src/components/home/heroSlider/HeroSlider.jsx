import { Link } from "react-router-dom";
import Image from "../../common/Image";
import slides from "../../../utils/constant/hero.data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./heroSlider.css";

import { Autoplay, Pagination } from "swiper/modules";

const HeroSlider = () => {
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            pagination={pagination}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {slides?.map((slide) => (
              <SwiperSlide key={slide.image}>
                <div className="slider_content">
                  <h1>{slide.title}</h1>
                  <h2>
                    {slide.name}
                    <br />
                    {slide.name}
                  </h2>
                  <p>{slide.desc}</p>
                  <Link to={slide.link} className="btn">
                    Shop Now
                  </Link>
                </div>

                <Image src={slide.image} alt={slide.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
