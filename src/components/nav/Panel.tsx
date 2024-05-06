"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

function Panel() {
  const isPanelOpened = useSelector((state: any) => state.navbar);

  return (
    <aside
      className={`fixed flex flex-col gap-6 items-center md:hidden w-11/12 left-1/2 -translate-x-1/2 h-auto bottom-0 py-6 px-3 bg-white z-50 rounded-t-2xl transition-all duration-200 ${
        !isPanelOpened ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex flex-col items-center gap-4 text-black text-sm font-medium">
        <Link href="">Services</Link>
        <Link href="">About</Link>
        <Link href="">Pricing</Link>
      </nav>
      <button className="primary-button flex">Get started</button>
    </aside>
  );
}

export default Panel;
