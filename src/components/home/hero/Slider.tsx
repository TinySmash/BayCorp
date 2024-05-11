"use client";

import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { CgScreen } from "react-icons/cg";
import { MdOutlineVideoSettings } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

type sliderSlot = {
  label: string;
  caption: string;
  icon: any;
};

function HeroSlider() {
  // const previousItemRef = useRef<any>(null);
  // const nextItemRef = useRef<any>(null);

  return (
    <div className="w-full relative flex flex-col items-center gap-3 sm:mt-10 md:hidden">
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
        style={{ paddingLeft: "10%" }}
        className="relative list-none w-3/4 h-auto flex justify-center flex-nowrap gap-10 overflow-x-hidden z-10"
      >
        <SwiperSlide>
          <li
            className="relative h-auto w-4/5 p-2 bg-gradient-to-br from-primary to-third rounded-md flex flex-col items-center gap-2 transition-all duration-200"
            // ref={previousItemRef}
          >
            <MdOutlineVideoSettings className="text-white text-8xl" />

            <h1 className="flex flex-col items-center text-white font-bold ">
              + 2000
              <span className="font-normal -mt-2">4k channels</span>
            </h1>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li
            className="relative h-auto w-4/5 p-2 bg-gradient-to-br from-primary to-third rounded-md flex flex-col items-center gap-2 transition-all duration-200"
            // ref={previousItemRef}
          >
            <HiOutlineGlobeEuropeAfrica className="text-white text-8xl" />

            <h1 className="flex flex-col items-center text-white font-bold ">
              76
              <span className="font-normal -mt-2">countries</span>
            </h1>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li
            className="relative h-auto w-4/5 p-2 bg-gradient-to-br from-primary to-third rounded-md flex flex-col items-center gap-2 transition-all duration-200"
            // ref={previousItemRef}
          >
            <CgScreen className="text-white text-8xl" />

            <h1 className="flex flex-col items-center text-white font-bold ">
              +20k
              <span className="font-normal -mt-2">channels</span>
            </h1>
          </li>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
