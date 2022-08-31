import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.less";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide><img src="http://139.196.43.147/gallery/t01d6f5fd3610da0a08.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="http://139.196.43.147/gallery/t012cde4a5058c156b7.jpg" alt=""/></SwiperSlide>
        <SwiperSlide><img src="http://139.196.43.147/gallery/t01aaa82ef6d0f1ec87.jpg" alt=""/></SwiperSlide>
      </Swiper>
    </>
  );
}