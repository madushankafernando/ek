/* eslint-disable @next/next/no-img-element */
import React from "react";

const EternalTokenSection = () => {
  return (
    <div>
      {/* for mobile */}
      <div className="md:hidden">
      <div className="flex flex-col md:flex-row justify-between md:mt-36 mt-16">
      
        {/* text */}
        <div className="md:w-1/2 px-[20px] py-6">
          {" "}
          <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase">
            Eternal Token
          </h1>
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
            The Eternal Koalas ecosystem is expanding with the introduction of
            our own token, built to enhance utility and value for our holders.
            Proceeds from the NFT mint will fund the token’s liquidity pool,
            ensuring a strong and stable launch. Eternal Koala NFT holders will
            also enjoy exclusive token airdrops, making them key participants in
            this next phase.{" "}
          </p>{" "}
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
            <a href="https://discord.gg/fYbyFhzV6N" className="text-[#AB9FF2]">
            More details coming soon.
            </a>
          </p>
        </div>
          {/* image */}
          <div className="text-center flex items-center justify-center my-8 md:m-auto ">
          <img src="./Group 95.png" alt="story-image" />
        </div>{" "}
      </div></div>
      {/* for desktop */}
      <div className="hidden md:block">
      <div className="flex flex-col md:flex-row justify-between md:mt-36 mt-16">
        {/* image */}
        <div className="text-center flex items-center justify-center my-8 md:m-auto ">
          <img src="./Group 95.png" alt="story-image" />
        </div>{" "}
        {/* text */}
        <div className="md:w-1/2 px-[20px] py-6">
          {" "}
          <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase">
            Eternal Token
          </h1>
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
            The Eternal Koalas ecosystem is expanding with the introduction of
            our own token, built to enhance utility and value for our holders.
            Proceeds from the NFT mint will fund the token’s liquidity pool,
            ensuring a strong and stable launch. Eternal Koala NFT holders will
            also enjoy exclusive token airdrops, making them key participants in
            this next phase.{" "}
          </p>{" "}
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
            <a href="https://discord.gg/fYbyFhzV6N" className="text-[#AB9FF2]">
            More details coming soon.
            </a>
          </p>
        </div>
      </div></div>
    </div>
  );
};

export default EternalTokenSection;
