/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="border text-center p-6"
      >
        <div className="flex flex-col">
          <Marquee speed={110}>
            <div className="mt-6 md:mt-10 text-[35px] md:text-[12.063rem] tracking-widest">
              ETERNAL ETERNAL ETERNAL ETERNAL
            </div>
          </Marquee>
          <img src="/Group 51.png" alt="" className=" h-3/4 " />
        </div>
        <div className="flex justify-end">
        <p className="text-[15px] md:text-[1.25rem] leading-relaxed p-8 mt-8">
            Follow Us on{" "}
            <span>
              <a href="https://x.com/EternalKoalas" className="text-[#AB9FF2]">
                x.com
              </a>
            </span>{" "}
            for Official Updates | Mint Your Koala, Join the Movement!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
