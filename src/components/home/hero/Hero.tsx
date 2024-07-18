"use client";

import { MdOutlineVideoSettings } from "react-icons/md";
import HeroSlider from "./Slider";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { CgScreen } from "react-icons/cg";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const [backgroundImages, setBackgroundImages] = useState([
    "/assets/images/hero-1.svg",
    "/assets/images/hero-2.svg",
  ]);

  // const bgRef = useRef<any>("");
  const [isBgSlide, setBgSlide] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // setBgSlide((prev) => {
      //   const newState = !prev;
      //   if (newState) {
      //     console.log("true case executed");
      //   } else {
      //     console.log("false case executed");
      //     setBackgroundImages((prevImages) => [...prevImages].reverse());
      //   }
      //   return newState;
      // });
      setBgSlide((prev) => !prev);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-hero w-full h-screen md:h-[120vh] relative text-center flex flex-col items-center container-page gap-2 md:gap-4">
        <div
          className={`w-[200vw] transition-all  duration-[1.7s] h-screen md:h-[120vh] overflow-x-auto absolute left-0 top-0 z-[1-] flex items-center ${
            !isBgSlide ? "-translate-x-[0vw] " : "-translate-x-[100vw] "
          }`}
          // ref={bgRef}
        >
          <Image
            width={20}
            height={12}
            alt="movie scene"
            src={backgroundImages?.[0]}
            className="w-[100vw] h-screen md:h-[120vh] object-cover"
            priority
          ></Image>
          <Image
            width={20}
            height={12}
            alt="movie scene"
            src={backgroundImages?.[1]}
            className="w-[100vw] h-screen md:h-[120vh] object-cover"
            priority
          ></Image>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white z-10 mt-12 md:mt-20 lg:mt-28 xl:mt-32">
          Stream Unlimited Entertainment
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-white z-10 ">
          Enjoy Thousands of Channels, On-Demand Content, and Crystal-Clear
          Quality
        </p>
        <button className="primary-button z-10 mt-3 mb-16 md:text-xl lg:text-2xl">
          Get started
        </button>
        <HeroSlider />
        <ul className="w-auto h-auto bg-alter-gradient hidden md:flex items-center gap-16 z-10 rounded-lg px-12 py-4 lg:py-6 lg:px-20">
          <li
            className="relative  rounded-md flex flex-col items-center gap-2 transition-all duration-200 z-10"
            // ref={previousItemRef}
          >
            <MdOutlineVideoSettings className="text-white text-7xl" />

            <h1 className="flex flex-col items-center text-white font-bold ">
              + 2000
              <span className="font-normal -mt-2">4k channels</span>
            </h1>
          </li>
          <li
            className="relative h-auto w-4/5 p-2 rounded-md flex flex-col items-center gap-2 transition-all duration-200"
            // ref={previousItemRef}
          >
            <HiOutlineGlobeEuropeAfrica className="text-white text-7xl" />

            <h1 className="flex flex-col items-center text-white font-bold ">
              76
              <span className="font-normal -mt-2">countries</span>
            </h1>
          </li>
          <li
            className="relative h-auto w-4/5 p-2 rounded-md flex flex-col items-center gap-2 transition-all duration-200"
            // ref={previousItemRef}
          >
            <CgScreen className="text-white text-7xl" />

            <h1 className="flex flex-col items-center text-white font-bold ">
              +20k
              <span className="font-normal -mt-2">channels</span>
            </h1>
          </li>
        </ul>
        <div className=" absolute w-full h-[20vh] flex items-center bottom-4 z-10 scrollbar-hidden gap-12">
          <ul className="absolute slider-track animate-channel-slider">
            <li className="channel-container">
              <Image
                src="/assets/images/channels/hbomax.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/la-liga.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/dazn.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/espn.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/premier-league.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/nbc.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/prime.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/Disney+.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/hbomax.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/la-liga.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/dazn.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/espn.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/premier-league.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/nbc.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/prime.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
            <li className="channel-container">
              <Image
                src="/assets/images/channels/Disney+.svg"
                alt=""
                width={50}
                height={50}
                className="channel"
              ></Image>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Hero;
