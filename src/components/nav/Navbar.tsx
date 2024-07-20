"use client";
import { RiMenuFoldLine } from "react-icons/ri";
import Image from "next/image";
import Panel from "./Panel";
import { useDispatch } from "react-redux";
import { toggleNav } from "@/redux/reducers/navSlice";
import { useEffect, useRef, useState } from "react";
import * as ReactScroll from "react-scroll";

function Navbar() {
  const dispatch = useDispatch();
  const navRef = useRef<any>(null);
  const navLinksRef = useRef<any>(null);
  const navMenu = useRef<any>(null);

  // LOGO ANIMATION

  const [logoSlide, setLogoSlide] = useState<boolean>(false);
  const [logoIntervalId, setLogoIntervalId] = useState<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 35) {
        navRef.current?.classList?.replace("bg-transparent", "bg-white");
        navMenu.current?.classList?.replace("text-white", "text-black");
        navLinksRef.current?.classList?.replace("text-white", "text-black");
        navRef.current?.classList?.replace(
          "backdrop-blur-none",
          "backdrop-blur-sm"
        );

        if (!logoIntervalId) {
          const intervalId = setInterval(() => {
            setLogoSlide((prev) => !prev);
          }, 12000);
          setLogoIntervalId(intervalId);
        }
      } else {
        navRef.current?.classList?.replace("bg-white", "bg-transparent");
        navMenu.current?.classList?.replace("text-black", "text-white");
        navLinksRef.current?.classList?.replace("text-black", "text-white");
        navRef.current?.classList?.replace(
          "backdrop-blur-sm",
          "backdrop-blur-none"
        );

        if (logoIntervalId) {
          clearInterval(logoIntervalId);
          setLogoIntervalId(null);
          setLogoSlide(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (logoIntervalId) {
        clearInterval(logoIntervalId);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [logoIntervalId]);

  return (
    <>
      <header
        className="fixed bg-transparent backdrop-blur-none xl:left-1/2 xl:-translate-x-1/2 w-full h-auto px-5 md:px-10 xl:px-16 py-4 xl:py-5 flex justify-between items-center z-[999] bg-opacity-85 transition-all duration-[700ms]"
        ref={navRef}
      >
        <div className="w-auto h-auto max-h-8 md:max-h-12 lg:max-h-14 relative overflow-y-hidden">
          <div
            className={`h-auto flex flex-col items-center gap-8 transition-all duration-1000 ${
              logoSlide ? "-translate-y-[70%]" : "-translate-y-0"
            }`}
          >
            <Image
              width={20}
              height={20}
              src="/assets/images/logo-shape.svg"
              alt="Logo"
              className="w-20 h-auto max-h-8 md:max-h-12 lg:max-h-14"
            ></Image>
            <Image
              width={20}
              height={20}
              src="/assets/images/logo-text.svg"
              alt="Logo"
              className="w-20 h-auto max-h-8 md:max-h-12 lg:max-h-14"
            ></Image>
          </div>
        </div>
        <nav
          className="hidden md:flex items-center gap-10 text-sm md:text-base xl:text-lg font-medium text-white"
          ref={navLinksRef}
        >
          <ReactScroll.Link
            smooth={true}
            duration={500}
            to="about"
            className="hover:cursor-pointer"
          >
            About
          </ReactScroll.Link>
          <ReactScroll.Link
            smooth={true}
            duration={500}
            to="trending"
            className="hover:cursor-pointer"
          >
            Trending
          </ReactScroll.Link>
          <ReactScroll.Link
            smooth={true}
            duration={500}
            to="pricing"
            className="hover:cursor-pointer"
          >
            Pricing
          </ReactScroll.Link>
        </nav>
        <button className="primary-button hidden md:flex text-lg xl:text-xl">
          Get started
        </button>
        <button
          className="md:hidden transition-all duration-700 text-white"
          onClick={() => {
            dispatch(toggleNav());
          }}
          ref={navMenu}
        >
          <RiMenuFoldLine className="text-2xl" />
        </button>
      </header>
      <Panel />
    </>
  );
}

export default Navbar;
