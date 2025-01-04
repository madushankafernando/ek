import React from "react";
import Marquee from "react-fast-marquee";
const PreMintSection = () => {
  return (
    <div className="md:mt-36 mt-16">
      <div className="w-full mt-6 bg-gradient-to-tr from-[#9B60E4] to-[#45B6C1] pt-4 pb-6  relative md:h-[25.5rem]">
        {/* main text */}
<Marquee speed={110}>
        <div className="text-[4.063rem] md:text-[11.938rem] font-bold text-center overflow-hidden whitespace-nowrap text-ellipsis inset-0 flex justify-center items-center">
         PRE MINT AVAILABLE SOON • PRE MINT AVAILABLE SOON • PRE MINT AVAILABLE SOON • PRE MINT AVAILABLE SOON •
        </div>
</Marquee>
        {/* bullets */}
        <div className="z-10 text-sm flex justify-start md:justify-end md:text-xl ml-6">
          <ul
            style={{ listStyleType: "disc", paddingLeft: "20px" }}
            className="md:w-1/3 md:mr-24"
          >
            <li>PRE-MINT AVAILABLE SOON</li>
            <li> 10,000 UNIQUE NFTS</li>
            <li>WHITELISTING NOW </li>
          </ul>
        </div>
        {/* circular button  for mobile*/}
        <div className="flex justify-end mr-4 md:hidden">
          <button className="bg-red-500 w-32 h-32 rounded-full flex justify-center items-center text-white text-sm">
            WAITLIST NOW
          </button>
        </div>
        {/* circular button  for laptop*/}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center hidden md:block z-10">
          <button className="bg-red-500 w-36 h-36 rounded-full flex justify-center items-center text-white text-base">
            WAITLIST NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreMintSection;
