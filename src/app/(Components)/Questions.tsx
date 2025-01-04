/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Questions = () => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] text-center uppercase md:mt-36 mt-16">
          Your Questions, Answered.
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* text */}
          <div className=" px-[20px] py-6 ">
            {" "}
            <img src="./Que.png" alt="story-image" />
          </div>
          <div className="text-center flex items-center justify-center my-8 md:m-auto ">
            <ul>
              <div className="flex gap-8 justify-between items-center border-b p-4 w-full border-t">
                {" "}
                <li className="text-[15px] md:text-[1.25rem] leading-relaxed">
                  What’s an NFT?
                </li>{" "}
                <span className="text-red-800 ">
                  <FaArrowRight />
                </span>
              </div>
              <div className="flex gap-8 justify-between items-center border-b p-4 w-full">
                {" "}
                <li className="text-[15px] md:text-[1.25rem] leading-relaxed">
                  What makes Eternal Koalas special?
                </li>{" "}
                <span className="text-red-800 ">
                  <FaArrowRight />
                </span>
              </div>
              <div className="flex gap-4 justify-between items-center border-b p-4 w-full">
                {" "}
                <li className="text-[15px] md:text-[1.25rem] leading-relaxed">
                  Who’s the team behind Eternal Koalas?
                </li>{" "}
                <span className="text-red-800 ">
                  <FaArrowRight />
                </span>
              </div>
              <div className="flex gap-4 justify-between items-center border-b p-4 w-full">
                {" "}
                <li className="text-[15px] md:text-[1.25rem] leading-relaxed">
                  When does minting begin?
                </li>{" "}
                <span className="text-red-800 ">
                  <FaArrowRight />
                </span>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
