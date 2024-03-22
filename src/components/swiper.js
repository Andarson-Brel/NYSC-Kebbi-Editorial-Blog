import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero from "./heroSection";
import { heroSectionData } from "./data";

export default function SwiperCarousel({ blogs }) {
  return (
    <div className="hero-section">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {blogs.map((data, index) => (
          <SwiperSlide key={index}>
            <Hero data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
