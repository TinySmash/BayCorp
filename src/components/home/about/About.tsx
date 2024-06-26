import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

function About() {
  return (
    <section
      id="about"
      className="relative w-full h-auto min-h-screen container-page sec-container bg-white flex flex-col items-center md:items-start text-center md:text-start gap-4"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl lg:w-2/3 font-bold text-black md:mb-10">
        <span className="text-primary">Nex</span>
        <span className="text-third">IPTV </span>
        premium IPTV subscription
      </h1>
      <Image
        width={100}
        height={50}
        alt="People watching TV"
        src="/assets/images/about.svg"
        className="w-[90%] max-w-[400px] md:w-2/3 h-auto shadow-xl md:hidden"
      ></Image>
      <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center md:items-start">
        <article className="flex flex-col gap-4 items-center md:items-start md:w-1/2">
          <p className="text-xs md:text-sm xl:text-base text-black text-opacity-75">
            We&apos;re all about bringing you the best in entertainment. With
            our subscription, you get access to a vast selection of channels and
            on-demand content, Whether you&apos;re into sports, movies, or TV
            shows. Our service lets you pause, rewind, and record your favorite
            programs, so you never miss a moment.
          </p>
          <button className="primary-button text-lg lg:text-xl xl:text-2xl font-semibold flex gap-1 items-center">
            Get started
            <IoIosArrowForward />
          </button>
        </article>
        <Image
          width={100}
          height={50}
          alt="People watching TV"
          src="/assets/images/about.svg"
          className="w-2/5 xl:w-1/3 h-auto shadow-xl hidden md:flex"
        ></Image>
      </div>
      <ul className="list-none w-full mt-3 md:mt-8 flex flex-col gap-2 text-sm md:text-base lg:text-xl xl:text-2xl ">
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
      <ul className="list-none relative bottom-0 w-full hidden md:flex items-center justify-between xl:justify-evenly  mt-10 xl:mt-16">
        <li className="">
          <Image
            width={30}
            height={30}
            alt="lg"
            src="/assets/images/about/lg.svg"
            className="w-24"
          ></Image>
        </li>
        <li className="">
          <Image
            width={30}
            height={30}
            alt="samsung"
            src="/assets/images/about/samsung.svg"
            className="w-24"
          ></Image>
        </li>
        <li className="">
          <Image
            width={30}
            height={30}
            alt="windows"
            src="/assets/images/about/windows.svg"
            className="w-24"
          ></Image>
        </li>
        <li className="">
          <Image
            width={30}
            height={30}
            alt="apple"
            src="/assets/images/about/apple.svg"
            className="w-16"
          ></Image>
        </li>
        <li className="">
          <Image
            width={30}
            height={30}
            alt="android"
            src="/assets/images/about/android.svg"
            className="w-24"
          ></Image>
        </li>
      </ul>
    </section>
  );
}

export default About;
