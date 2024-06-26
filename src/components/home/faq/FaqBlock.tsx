"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type faq = {
  question: string;
  answer: string;
  isOpened?: boolean;
};

function FaqBlock(props: faq) {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (props.isOpened) {
      setIsOpened(props.isOpened);
    }
  }, []);

  return (
    <li
      className={`w-full flex flex-col-reverse drop-shadow-lg border-black transition-all rounded-md ${
        isOpened ? "border" : "border-0"
      }`}
    >
      <div
        className={`overflow-hidden -translate-y-1 transition-all duration-300 bg-antiflash px-4 md:px-6 rounded-b-md z-10 ${
          isOpened ? "h-auto pb-2 pt-3" : "h-0 py-0"
        }`}
      >
        <p className="text-black opacity-60 text-xs md:text-sm xl:text-base">
          {props.answer}
        </p>
      </div>
      <div
        className={`px-4 py-2 md:py-3 md:px-6 w-full bg-antiflash  border-black flex justify-between items-center  z-30 ${
          isOpened ? "rounded-t-md border-0" : "rounded-md border"
        } `}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <h1 className="text-sm md:text-base xl:text-lg font-medium text-black">
          {props.question}
        </h1>
        <IoIosArrowDown
          style={{ fontSize: "16px" }}
          className={`transition-all duration-300 ${
            isOpened ? "rotate-0" : "-rotate-90"
          }`}
        />
      </div>
    </li>
  );
}

export default FaqBlock;
