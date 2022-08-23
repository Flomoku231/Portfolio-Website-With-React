import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css/effect-fade";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const HomePageTestimonial = () => {
  return (
    <React.Fragment>
      <div id="Testimonial" className="HomePage__Testimonial">
        <div className="HomePage__Testimonial-text">
          <h1>Testimonial</h1>
          <h2>See What People say about me</h2>
        </div>
        <div className="HomePageTestimonial_card">
          <Swiper
            modules={[Navigation, EffectFade, Autoplay, Pagination]}
            navigation
            effect
            speed={800}
            slidesPerView={2}
            spaceBetween={10}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            pagination={{ clickable: true }}
            className="My_Slide"
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePageTestimonial;
