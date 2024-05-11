"use client";
import { RiMenuFoldLine } from "react-icons/ri";
import Link from "next/link";
import Panel from "./Panel";
import { useDispatch } from "react-redux";
import { toggleNav } from "@/redux/reducers/navSlice";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <>
      <header className="fixed sec-container xl:left-1/2 xl:-translate-x-1/2  w-full h-auto px-5 md:px-10 xl:px-16 py-4 md:py-6 xl:py-8 flex justify-between items-center z-[999]">
        <h1 className="font-bold text-xl md:text-2xl xl:text-3xl text-primary">
          Bay<span className="text-third">Corp</span>
        </h1>
        <nav className="hidden md:flex items-center gap-10 text-white text-sm md:text-base xl:text-lg font-medium">
          <Link href="">Services</Link>
          <Link href="">About</Link>
          <Link href="">Pricing</Link>
        </nav>
        <button className="primary-button hidden md:flex text-lg xl:text-xl">
          Get started
        </button>
        <button
          className="md:hidden"
          onClick={() => {
            dispatch(toggleNav());
          }}
        >
          <RiMenuFoldLine className="text-2xl text-white" />
        </button>
      </header>
      <Panel />
    </>
  );
}

export default Navbar;
