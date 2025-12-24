import { Link } from "react-router-dom";
import Image from "../../common/Image";
import slides from "../../../utils/constant/hero.data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./heroSlider.css";

import { Autoplay, Pagination } from "swiper/modules";

const HeroSlider = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            modules={[Pagination, Autoplay]}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slider_content">
                  <h1>{slide.title}</h1>
                  <h2>
                    {slide.name.split(" ").slice(0, 2).join(" ")} <br />
                    {slide.name.split(" ").slice(2).join(" ")}
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
