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
              name="1 month"
              price={10}
              features={[
                "+70,000 Channels, Movies and Series",
                "High Quality 4K FHD HD",
                "No Freezing",
                "All devices are supported",
                "24/7 Support",
                "Always Available Server",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PricingPlan
              name="3 months"
              price={20}
              features={[
                "+70,000 Channels, Movies and Series",
                "High Quality 4K FHD HD",
                "No Freezing",
                "All devices are supported",
                "24/7 Support",
                "Always Available Server",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PricingPlan
              name="6 months"
              price={30}
              features={[
                "+70,000 Channels, Movies and Series",
                "High Quality 4K FHD HD",
                "No Freezing",
                "All devices are supported",
                "24/7 Support",
                "Always Available Server",
              ]}
            />
          </SwiperSlide>
          <SwiperSlide>
            <PricingPlan
              name="12 months"
              price={45}
              features={[
                "+70,000 Channels, Movies and Series",
                "High Quality 4K FHD HD",
                "No Freezing",
                "All devices are supported",
                "24/7 Support",
                "Always Available Server",
              ]}
              topSeller={true}
            />
          </SwiperSlide>
          <div className="slider-controler mt-20">
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div className="relative w-full h-auto hidden lg:flex items-center justify-center">
        <PricingPlan
          name="1 month"
          price={10}
          features={[
            "+70,000 Channels, Movies and Series",
            "High Quality 4K FHD HD",
            "No Freezing",
            "All devices are supported",
            "24/7 Support",
            "Always Available Server",
          ]}
        />
        <PricingPlan
          name="2 months"
          price={20}
          features={[
            "+70,000 Channels, Movies and Series",
            "High Quality 4K FHD HD",
            "No Freezing",
            "All devices are supported",
            "24/7 Support",
            "Always Available Server",
          ]}
        />
        <PricingPlan
          name="6 months"
          price={30}
          features={[
            "+70,000 Channels, Movies and Series",
            "High Quality 4K FHD HD",
            "No Freezing",
            "All devices are supported",
            "24/7 Support",
            "Always Available Server",
          ]}
        />
        <PricingPlan
          name="12 months"
          price={45}
          features={[
            "+70,000 Channels, Movies and Series",
            "High Quality 4K FHD HD",
            "No Freezing",
            "All devices are supported",
            "24/7 Support",
            "Always Available Server",
          ]}
          topSeller={true}
        />
      </div>
    </section>
  );
}

export default Pricing;
