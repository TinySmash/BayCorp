"use client";
import { RiMenuFoldLine } from "react-icons/ri";
import Link from "next/link";
import Panel from "./Panel";
import { useDispatch } from "react-redux";
import { toggleNav } from "@/redux/reducers/navSlice";
import { useEffect, useRef } from "react";
import * as ReactScroll from "react-scroll";

function Navbar() {
  const dispatch = useDispatch();
  const navRef = useRef<any>(null);
  const navLinksRef = useRef<any>(null);
  const navMenu = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 35) {
        navRef.current?.classList?.replace("bg-transparent", "bg-white");
        navMenu.current?.classList?.replace("text-white", "text-black");
        navLinksRef.current?.classList?.replace("text-white", "text-black");
        // navRef.current?.classList.add("bg-opacity-75")
      } else {
        navRef.current?.classList?.replace("bg-white", "bg-transparent");
        navMenu.current?.classList?.replace("text-black", "text-white");
        navLinksRef.current?.classList?.replace("text-black", "text-white");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className="fixed bg-transparent backdrop-blur-sm xl:left-1/2 xl:-translate-x-1/2  w-full h-auto px-5 md:px-10 xl:px-16 py-4 xl:py-5 flex justify-between items-center z-[999] bg-opacity-85 transition-all duration-[700ms]"
        ref={navRef}
      >
        <h1 className="font-bold text-xl md:text-2xl xl:text-3xl text-primary">
          Bay<span className="text-third">Corp</span>
        </h1>
        <nav
          className="hidden md:flex items-center gap-10 text-sm md:text-base xl:text-lg font-medium text-white "
          ref={navLinksRef}
        >
          <ReactScroll.Link
            smooth={true}
            duration={500}
            to="about"
            className="hover:cursor-pointer "
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
