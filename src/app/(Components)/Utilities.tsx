import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Utilities = () => {
  return (
    <div>
      <div>
        {" "}
        <div className="flex flex-col md:flex-row justify-between items-center md:mt-36 mt-16">
          {/* text */}
          <div className=" px-[20px] py-6 ">
            {" "}
            <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] text-center uppercase">
              Eternal utilities
            </h1>
            <div className="flex justify-end">
           {/* para */}
              <div className="flex justify-end items-end md:w-1/2">
                <p className="text-[15px] md:text-[1.25rem] leading-relaxed p-8">
                  Owning a Super Rare EK NFT also grants membership to the Elite{" "}
                  <span>
                    <a
                      href="https://x.com/EternalKoalas"
                      className="text-[#AB9FF2]"
                    >
                      Super Rare Club
                    </a>
                  </span>{" "}
                  that will give you access to:
                </p>
              </div>
            </div>
          </div>
          <div className="text-center flex items-center justify-center my-8 md:m-auto">
          <ul>
            <div className="flex gap-4 items-center border-b p-4 w-80 border-t">
              {" "}
              <span className="text-red-800 ">
                <FaArrowRight />
              </span>
              <li className="text-[15px] md:text-[1.25rem] leading-relaxed">1% of royalties payback</li>
            </div>
            <div className="flex gap-4 items-center border-b p-4 w-80">
              {" "}
              <span className="text-red-800 ">
                <FaArrowRight />
              </span>
              <li className="text-[15px] md:text-[1.25rem] leading-relaxed">Eternal token airdrop</li>
            </div>
            <div className="flex gap-4 items-center border-b p-4 w-80">
              {" "}
              <span className="text-red-800 ">
                <FaArrowRight />
              </span>
              <li className="text-[15px] md:text-[1.25rem] leading-relaxed">Eternal token airdrop</li>
            </div>
            <div className="flex gap-4 items-center border-b p-4 w-80">
              {" "}
              <span className="text-red-800 ">
                <FaArrowRight />
              </span>
              <li className="text-[15px] md:text-[1.25rem] leading-relaxed">Eternal token airdrop</li>
            </div>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilities;
