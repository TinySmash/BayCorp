"use client";
import { useState } from "react";
import { MdDevices } from "react-icons/md";

type pricingTag = {
  name: string;
  price: number;
  features: string[];
  topSeller?: boolean;
  links: [string, string, string];
};

function PricingPlan(props: pricingTag) {
  const [devicesHovered, setDevicesHovered] = useState<boolean>(false);

  return (
    <div className="relative ml-[2.55%] lg:ml-0 w-[95%] lg:max-w-[350px] xl:w-full xl:max-w-none h-auto pt-12 pb-5 px-3 lg:px-6 bg-white shadow-xl border-2 flex flex-col items-center text-center gap-2">
      {props.topSeller === true ? (
        <h1 className="absolute right-0 top-3 px-3 py-1 bg-secondary text-white rounded-l-lg font-semibold text-sm md:text-base lg:text-xl">
          Top Seller
        </h1>
      ) : null}
      <h1 className="text-black text-2xl md:text-4xl font-semibold">
        {props.name}
      </h1>
      <h2 className="text-third text-3xl md:text-4xl font-bold mb-2 -translate-y-2">
        {props.price}€
        {/* <span className="text-lg md:text-xl font-medium">/year</span> */}
      </h2>
      <ul className="list-none w-full md:mt-8 flex flex-col gap-2 text-sm md:text-base lg:text-xl xl:text-2xl ">
        {props.features.map((e, i) => {
          return (
            <li
              className="flex items-center gap-2 font-medium text-black text-xs md:text-base lg:text-xs xl:text-base text-start"
              key={i}
            >
              <span className="w-5 h-5 text-lg text-white flex justify-center items-center  bg-gradient-to-br from-primary to-third rounded-full">
                ✓
              </span>{" "}
              {e}
            </li>
          );
        })}
      </ul>
      <div className=" relative w-full h-auto flex justify-start sm:justify-center gap-2 items-center mt-5 mb-3">
        <a
          className="relative  px-3 py-1 bg-primary rounded-full text-white font-semibold md:text-xl lg:text-lg "
          target="_blank"
          href={props.links?.[0]}
        >
          Get started
        </a>
        <div
          className="relative rounded-full bg-gradient-to-br from-primary to-secondary p-2 md:p-[10px] cursor-pointer"
          onMouseEnter={() => {
            setDevicesHovered(true);
          }}
          onMouseLeave={() => {
            setDevicesHovered(false);
          }}
        >
          <MdDevices className="text-white lg:text-lg" />
          <div
            className={`w-fit h-auto flex-col items-center bg-white border absolute translate-x-7 lg:translate-x-8 -translate-y-[65%] ${
              devicesHovered ? "flex" : "hidden"
            }`}
          >
            <a
              href={props.links?.[1]}
              className="px-2 py-1 text-black bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-10 text-[10px] lg:text-sm lg:font-medium whitespace-nowrap"
            >
              2 devices
            </a>
            <a
              href={props.links?.[2]}
              className="px-2 py-1 text-black bg-white bg-opacity-10 hover:bg-black hover:bg-opacity-10 text-[10px] lg:text-sm lg:font-medium whitespace-nowrap"
            >
              3 devices
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPlan;
