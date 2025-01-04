/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Ownership = () => {
  return (
    <div>
      <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] text-center uppercase md:mt-36 mt-16">
        Benefits of ownership
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* text */}
        <div className="md:w-1/2 px-[20px] py-6 ">
          <ul>
            <div className="flex gap-4 items-center border-b p-4 w-80 border-t">
              {" "}
              <span className="text-red-800 ">
                <FaArrowRight />
              </span>
              <li className="text-[15px] md:text-[1.25rem] leading-relaxed">You own the IP</li>
            </div>
            <div className="flex gap-4 items-center border-b p-4 w-80">
              {" "}
              <span className="text-red-800 ">
                <FaArrowRight />
              </span>
              <li className="text-[15px] md:text-[1.25rem] leading-relaxed">Became a Member</li>
            </div>
            <div className="flex gap-4 items-center border-b p-4 w-80">
              {" "}
              <span className="text-red-800 ">
                <FaArrowRight />
              </span>
              <li className="text-[15px] md:text-[1.25rem] leading-relaxed">Take a Part in our mission</li>
            </div>
            <div className="flex gap-4 items-center border-b p-4 w-80">
              {" "}
              <span className="text-red-800 ">
                <FaArrowRight />
              </span>
              <li className="text-[15px] md:text-[1.25rem] leading-relaxed">Join our discord</li>
            </div>
          </ul>
        </div>
        <div className="text-center flex items-center justify-center my-8 md:m-auto ">
          {/* svg */}
          <img src="./Group 112.png" alt="story-image" />

          {/* <Image src="/Group 2.png" alt="" height={94} width={94} className="w-64 h-64"/> */}
        </div>
      </div>
    </div>
  );
};

export default Ownership;
