import { MdOutlineVideoSettings } from "react-icons/md";
import HeroSlider from "./Slider";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import { CgScreen } from "react-icons/cg";

function Hero() {
  return (
    <section className="bg-hero w-full h-screen relative text-center flex flex-col items-center container-page gap-2 md:gap-4">
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white z-10 md:mt-10">
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
      <ul className="w-auto h-auto bg-gradient-to-br from-primary to-third hidden md:flex items-center gap-16 z-10 rounded-lg px-12 py-4 lg:py-6 lg:px-20">
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
          className="relative h-auto w-4/5 p-2 bg-gradient-to-br from-primary to-third rounded-md flex flex-col items-center gap-2 transition-all duration-200"
          // ref={previousItemRef}
        >
          <HiOutlineGlobeEuropeAfrica className="text-white text-7xl" />

          <h1 className="flex flex-col items-center text-white font-bold ">
            76
            <span className="font-normal -mt-2">countries</span>
          </h1>
        </li>
        <li
          className="relative h-auto w-4/5 p-2 bg-gradient-to-br from-primary to-third rounded-md flex flex-col items-center gap-2 transition-all duration-200"
          // ref={previousItemRef}
        >
          <CgScreen className="text-white text-7xl" />

          <h1 className="flex flex-col items-center text-white font-bold ">
            +20k
            <span className="font-normal -mt-2">channels</span>
          </h1>
        </li>
      </ul>
    </section>
  );
}

export default Hero;
