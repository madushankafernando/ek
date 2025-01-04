import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:mt-36 mt-16">
        {/* welcome SECTION */}
        <div className="px-[20px] py-6 md:w-3/4">
          {" "}
          <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] ">
            WELCOME TO
          </h1>
          <h1 className="text-[2.125rem] md:text-[4.2rem] font-bold mb-[26px] md:mb-[27px] ">
            ETERNAL KOALAS
          </h1>
        </div>
        <div className="text-center flex flex-col items-center justify-center my-8 md:m-auto border-t border-gray-500 w-full p-8">
        <hr className="border-t border-black w-3/4 mx-auto" />
          <p className="text-[15px] md:text-[1.25rem] leading-relaxed">
          Eternal Koalas is more than pixels – it’s a movement. Each hand-drawn NFT is a ticket to rarity, rewards, and real impact. Whether you’re here to collect, trade, or make a difference, you’ll own more than art – you’ll own a stake in a thriving community dedicated to blending blockchain innovation with sustainability and creating lasting value for its members.
          </p>
          <hr />
          <p className="text-[15px] md:text-[1.25rem] leading-relaxed border-t border-gray-500 w-full p-8 mt-8">
          But what truly sets Eternal Koalas apart are the exclusive utilities for our holders. Discover what’s waiting for you below.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
