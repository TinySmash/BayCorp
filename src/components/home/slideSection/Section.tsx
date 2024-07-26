"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function SlideShowSection() {
  const slidersRef = useRef<any>([]);
  const revealRef = useRef<any>("");
  const isInView = useInView(revealRef, { once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        for (let i = 0; i <= 3; i++) {
          setTimeout(() => {
            slidersRef.current[i]?.classList.remove("slide-off");
            slidersRef.current[i]?.classList.remove("slide-off-alt");
          }, 200 * i);
        }
      }, 400);
    }
  }, [isInView]);

  return (
    <section className="relative w-full h-screen bg-black container-page flex flex-col items-center justify-center gap-4 lg:gap-14">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center md:mb-8">
        Regardez vos événements préférés en direct
      </h1>
      <ul
        className="list-none w-full h-max flex flex-1 flex-col md:flex-row gap-5 lg:gap-8 xl:gap-12 lg:px-8 items-center md:items-start md:justify-between xl:justify-center"
        ref={revealRef}
      >
        <li
          className="list-slide-item flex items-center relative transition-all duration-1000 slide-off"
          ref={(e) => {
            slidersRef.current[0] = e;
          }}
        >
          <Image
            width={50}
            height={50}
            alt="Football poster"
            src="/assets/images/slideshow/belli.svg"
            className=" w-full h-auto md:h-full md:w-auto sm:mt-5 md:mt-0 md:object-cover"
          ></Image>
        </li>
        <li
          className="list-slide-item flex items-center transition-all duration-1000 slide-off-alt"
          ref={(e) => {
            slidersRef.current[1] = e;
          }}
        >
          <Image
            width={50}
            height={50}
            alt="TV series poster"
            src="/assets/images/slideshow/movie.svg"
            className="w-full h-auto md:h-full md:w-auto md:object-cover"
          ></Image>
        </li>
        <li
          className="list-slide-item flex items-center transition-all duration-1000 slide-off"
          ref={(e) => {
            slidersRef.current[2] = e;
          }}
        >
          <Image
            width={50}
            height={50}
            alt="Basketball poster"
            src="/assets/images/slideshow/KD.svg"
            className="w-full h-auto md:h-full md:w-auto md:object-cover"
          ></Image>
        </li>
        <li
          className="list-slide-item flex items-start transition-all duration-1000 slide-off-alt"
          ref={(e) => {
            slidersRef.current[3] = e;
          }}
        >
          <Image
            width={50}
            height={50}
            alt="Movie poster"
            src="/assets/images/slideshow/series.svg"
            className="w-full h-auto md:h-full md:w-auto -mt-7 md:mt-0 md:object-cover"
          ></Image>
        </li>
      </ul>
    </section>
  );
}

export default SlideShowSection;
