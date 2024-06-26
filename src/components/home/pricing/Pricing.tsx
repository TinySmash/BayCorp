"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import PricingPlan from "./Plan";

function Pricing() {
  return (
    <section
      className="container-page w-full h-auto min-h-screen sec-container relative text-center"
      id="pricing"
    >
      <h1 className="text-black font-bold text-2xl md:text-3xl xl:text-5xl xl:mt-14 mb-12 lg:mb-20">
        Choose your plan
      </h1>
      <div className="relative lg:hidden">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            // clickable: true
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          style={{ display: "flex", justifyContent: "center" }}
          className="relative list-none w-full max-w-[320px] md:max-w-[400px] h-auto flex  justify-center flex-nowrap overflow-x-hidden z-10 "
        >
          <SwiperSlide>
            <PricingPlan
              name="Basic"
              price={29.99}
              features={[
                "Easy to use",
                "Fast & secure service",
                "Local to international content",
                "Local to international content",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PricingPlan
              name="Standard"
              price={49.99}
              features={[
                "Easy to use",
                "Fast & secure service",
                "Local to international content",
                "Local to international content",
                "Local to international content",
              ]}
              topSeller={true}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PricingPlan
              name="Standard"
              price={50}
              features={[
                "Easy to use",
                "Fast & secure service",
                "Local to international content",
                "Local to international content",
                "Local to international content",
                "Local to international content",
              ]}
            />
          </SwiperSlide>
          <div className="slider-controler mt-20">
            {/* <div className="swiper-button-prev slider-arrow">
           
          </div>
          <div className="swiper-button-next slider-arrow">
            
          </div> */}
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div className="relative w-full h-auto hidden lg:flex items-center justify-between">
        <PricingPlan
          name="Basic"
          price={29.99}
          features={[
            "Easy to use",
            "Fast & secure service",
            "Local to international content",
            "Local to international content",
          ]}
        />
        <PricingPlan
          name="Standard"
          price={49.99}
          features={[
            "Easy to use",
            "Fast & secure service",
            "Local to international content",
            "Local to international content",
            "Local to international content",
          ]}
          topSeller={true}
        />
        <PricingPlan
          name="Premium"
          price={89.99}
          features={[
            "Easy to use",
            "Fast & secure service",
            "Local to international content",
            "Local to international content",
            "Local to international content",
            "Local to international content",
          ]}
        />
      </div>
    </section>
  );
}

export default Pricing;
