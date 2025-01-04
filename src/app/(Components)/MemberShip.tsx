/* eslint-disable @next/next/no-img-element */
import React from "react";

const MemberShip = () => {
  return (
    <div>
      {" "}
      {/* for mobile */}
      <div className="md:hidden">
        <div className="flex flex-col md:flex-row justify-between md:mt-36 mt-16">
        
          {/* text */}
          <div className="md:w-1/2 px-[20px] py-6">
            {" "}
            <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase">
              Community membership
            </h1>
            <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
              Acquiring an Eternal Koala gives you access to an exclusive,
              thriving community built around value, growth, and opportunities.
              As a holder, you unlock a range of perks designed to keep you
              engaged and rewarded. Follow Us on{" "}
              <span>
                <a
                  href="https://discord.gg/fYbyFhzV6N"
                  className="text-[#AB9FF2]"
                >
                  discord.com
                </a>
              </span>{" "}
              for Updates.
            </p>
          </div>
            {/* image */}
            <div className="text-center flex items-center justify-center my-8 md:m-auto ">
            <img src="./Group 111.png" alt="story-image" />
          </div>{" "}
        </div>
      </div>
      {/* for lptop */}
      <div className="hidden md:block">
        <div className="flex flex-col md:flex-row justify-between md:mt-36 mt-16">
          {/* image */}
          <div className="text-center flex items-center justify-center my-8 md:m-auto ">
            <img src="./Group 111.png" alt="story-image" />
          </div>{" "}
          {/* text */}
          <div className="md:w-1/2 px-[20px] py-6">
            {" "}
            <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase">
              Community membership
            </h1>
            <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
              Acquiring an Eternal Koala gives you access to an exclusive,
              thriving community built around value, growth, and opportunities.
              As a holder, you unlock a range of perks designed to keep you
              engaged and rewarded. Follow Us on{" "}
              <span>
                <a
                  href="https://discord.gg/fYbyFhzV6N"
                  className="text-[#AB9FF2]"
                >
                  discord.com
                </a>
              </span>{" "}
              for Updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
