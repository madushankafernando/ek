/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { BsDot } from "react-icons/bs";
import ScrollAnimation from "./ScrollAnimation";

const EternalMapSection = () => {
  return (
    <div>
      <div className="w-full bg-gradient-to-tr from-[#9B60E4] to-[#45B6C1] pt-4 pb-6 relative md:h-[45.5rem] md:mt-36 mt-16">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 border border-black">
            <img
              src="/Group 80.png"
              alt=""
              className="h-[44.5rem] object-cover w-full max-h-full"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 flex-grow flex flex-col p-6 relative">
            {/* Headline */}
            <div className="flex items-start">
              <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase">
                Eternal Map
              </h1>
            </div>
            {/* Bullets Section */}
            <div className="mb-4">
              <ScrollAnimation />
            </div>

            {/* Animated Marquee Section */}
            <div className="w-full py-4 overflow-hidden mt-auto">
              <Marquee speed={110} className="text-[15px] md:text-[1.25rem]">
                <span className="flex justify-start items-center">
                  Work in Progress <BsDot className="text-red-400" />
                  Work in Progress <BsDot className="text-red-400" />
                  Work in Progress <BsDot className="text-red-400" />
                  Work in Progress <BsDot className="text-red-400" />
                  Work in Progress <BsDot className="text-red-400" />
                </span>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EternalMapSection;
