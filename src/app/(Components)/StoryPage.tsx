/* eslint-disable @next/next/no-img-element */
import React from "react";

const StoryPage = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col md:flex-row justify-between">
       {/* text */}
        <div className="md:w-1/2 px-[20px] py-6">
          {" "}
          <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase">
            WE ALL LOVE GOOD STORY, RIGHT?
          </h1>
          <p className="text-[15px] md:text-[1.25rem] leading-relaxed">
          Eternal Koalas is a collection of 4,444 unique, hand-drawn Koala NFTs on the Solana blockchain. More than digital collectibles, Eternal Koalas introduces a thriving ecosystem where holders benefit from rewards like passive income through royalties, exclusive airdrops, and early access to future expansions. Combining bold artistry with blockchain innovation, this project is redefining value in Web3
          </p>
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
            We are currently whitelisting and rewarding active supporters on X.
            Follow us on for{" "}
            <span>
              <a href="https://x.com/EternalKoalas" className="text-[#AB9FF2]">
                x.com
              </a>
            </span>{" "}
            all official updates.
          </p>
        </div>
        <div className="text-center flex items-center justify-center my-8 md:m-auto ">
          {/* svg */}
          <img src="./Group 113.png" alt="story-image" />

          {/* <Image src="/Group 2.png" alt="" height={94} width={94} className="w-64 h-64"/> */}
        </div>
      </div>
    </div>
  );
};

export default StoryPage;
