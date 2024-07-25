import Image from "next/image";
import {
  IoIosArrowForward,
  IoLogoWindows,
  IoLogoAndroid,
} from "react-icons/io";
import { SiSamsung, SiNetflix } from "react-icons/si";
import { FaApple } from "react-icons/fa6";

function About() {
  return (
    <section
      id="about"
      className="relative w-full h-auto container-page sec-container bg-white flex flex-col items-start md:items-start md:text-start gap-4"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl lg:w-2/3 font-bold text-black md:mb-10">
        <span className="text-primary text-3xl md:text-4xl lg:text-5xl">
          Bay
        </span>
        <span className="text-third text-xl md:text-2xl lg:text-3xl">
          IPTV{" "}
        </span>
        premium IPTV subscription
      </h1>
      <div className="w-full sm:w-2/3 grid md:hidden grid-cols-9 grid-rows-9 gap-3">
        <Image
          width={100}
          height={50}
          alt="People watching TV"
          src="/assets/images/about/about1.svg"
          className="shadow-xl col-start-2 col-end-6 row-start-1 row-end-5 w-auto h-auto rounded-md"
        ></Image>
        <Image
          width={100}
          height={50}
          alt="People watching TV"
          src="/assets/images/about/about-2.svg"
          className="shadow-xl col-start-6 col-end-10 row-start-3 row-end-7 w-auto h-auto rounded-md"
        ></Image>
        <Image
          width={100}
          height={50}
          alt="People watching TV"
          src="/assets/images/about/about-3.svg"
          className="shadow-xl col-start-1 col-end-6 row-start-5 row-end-10 w-auto h-auto rounded-md"
        ></Image>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center md:items-start">
        <article className="flex flex-col gap-5 items-start md:items-start md:w-1/2">
          <p className="text-xs md:text-sm xl:text-base text-black text-opacity-75">
            We&apos;re all about bringing you the best in entertainment. With
            our subscription, you get access to a vast selection of channels and
            on-demand content, Whether you&apos;re into sports, movies, or TV
            shows. Our service lets you pause, rewind, and record your favorite
            programs, so you never miss a moment.
          </p>

          <ul className="list-none w-full mt-3 md:mt-0 flex flex-col gap-2 text-sm md:text-base lg:text-xl xl:text-2xl ">
            <li className="flex items-center gap-2 font-semibold text-black">
              <span className="w-6 h-6 text-lg text-white flex justify-center items-center  bg-gradient-to-br from-primary to-third rounded-full">
                ✓
              </span>{" "}
              Easy to use
            </li>
            <li className="flex items-center gap-2 font-semibold text-black">
              <span className="w-6 h-6 text-lg text-white flex justify-center items-center  bg-gradient-to-br from-primary to-third rounded-full">
                ✓
              </span>{" "}
              Fast & secure service
            </li>
            <li className="flex items-center gap-2 font-semibold text-black">
              <span className="w-6 h-6 text-lg text-white flex justify-center items-center  bg-gradient-to-br from-primary to-third rounded-full">
                ✓
              </span>{" "}
              Local to international content
            </li>
          </ul>
          <button className="primary-button text-lg lg:text-xl xl:text-2xl font-semibold flex gap-1 items-center">
            Get started
            <IoIosArrowForward />
          </button>
        </article>
        <div className="w-2/5 xl:w-1/3 h-full hidden md:grid grid-cols-9 grid-rows-9 gap-3">
          <Image
            width={100}
            height={50}
            alt="People watching TV"
            src="/assets/images/about/about1.svg"
            className="shadow-xl col-start-2 col-end-6 row-start-1 row-end-5 w-auto h-auto rounded-md"
          ></Image>
          <Image
            width={100}
            height={50}
            alt="People watching TV"
            src="/assets/images/about/about-2.svg"
            className="shadow-xl col-start-6 col-end-10 row-start-3 row-end-7 w-auto h-auto rounded-md"
          ></Image>
          <Image
            width={100}
            height={50}
            alt="People watching TV"
            src="/assets/images/about/about-3.svg"
            className="shadow-xl col-start-1 col-end-6 row-start-5 row-end-10 w-auto h-auto rounded-md"
          ></Image>
        </div>
      </div>

      <ul className="list-none relative bottom-0 w-full hidden lg:flex items-center justify-between xl:justify-evenly  mt-10 xl:mt-16">
        <li className="">
          <FaApple
            className=" opacity-40  transition-all duration-300 bg-text-black hover:text-secondary bg-clip-text hover:opacity-100 hover:scale-110"
            size={130}
          />
        </li>
        <li className="">
          <SiNetflix
            className=" opacity-40  transition-all duration-300 bg-text-black hover:text-red-600 bg-clip-text hover:opacity-100 hover:scale-110"
            size={100}
          />
        </li>
        <li className="">
          <IoLogoWindows
            className=" opacity-40  transition-all duration-300 bg-text-black hover:text-primary bg-clip-text hover:opacity-100 hover:scale-110"
            size={110}
          />
        </li>
        <li className="">
          <SiSamsung
            className=" opacity-40  transition-all duration-300 bg-text-black hover:text-third bg-clip-text hover:opacity-100 hover:scale-110"
            size={130}
          />
        </li>
        <li className="">
          <IoLogoAndroid
            className=" opacity-40  transition-all duration-300 bg-text-black hover:text-green-500 bg-clip-text hover:opacity-100 hover:scale-110"
            size={130}
          />
        </li>
      </ul>
    </section>
  );
}

export default About;
