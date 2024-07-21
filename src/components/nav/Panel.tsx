"use client";

import { useSelector, useDispatch } from "react-redux";
import * as ReactScroll from "react-scroll";

import { toggleNav } from "@/redux/reducers/navSlice";

function Panel() {
  const dispatch = useDispatch();
  const isPanelOpened = useSelector((state: any) => state.navbar);

  return (
    <aside
      className={`fixed flex flex-col gap-6 items-center md:hidden w-11/12 left-1/2 -translate-x-1/2 h-auto bottom-0 py-6 px-3 bg-white z-50 rounded-t-2xl transition-all duration-200 ${
        !isPanelOpened ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex flex-col items-center gap-4 text-black text-sm font-medium">
        <ReactScroll.Link
          onClick={() => {
            dispatch(toggleNav());
          }}
          to="about"
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer"
        >
          About
        </ReactScroll.Link>
        <ReactScroll.Link
          onClick={() => {
            dispatch(toggleNav());
          }}
          to="trending"
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer"
        >
          Trending
        </ReactScroll.Link>
        <ReactScroll.Link
          onClick={() => {
            dispatch(toggleNav());
          }}
          to="pricing"
          smooth={true}
          duration={500}
          className="transition-all cursor-pointer"
        >
          Pricing
        </ReactScroll.Link>
      </nav>
      <ReactScroll.Link
        onClick={() => {
          dispatch(toggleNav());
        }}
        smooth={true}
        duration={500}
        to="pricing"
        className="primary-button flex"
      >
        Get started
      </ReactScroll.Link>
    </aside>
  );
}

export default Panel;
