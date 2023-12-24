import { Heading } from "@chakra-ui/react";
import React from "react";

function Slider() {
  return (
    <div className="flex flex-col pt-5x">
      <div className="">
        <h1 className="font-bold font-krona text-xl text-center">
          <span className=" before:absolute before:inset-3.5 before:left-0 before:w-full before:h-1/2 before:bg-[#B1DEEC] relative inline-block">
            <span className="relative text-black ">Now Trending</span>
          </span>
        </h1>
      </div>
      <div className="slider"></div>
    </div>
  );
}

export default Slider;
