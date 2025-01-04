/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "./Button";

const HomeCommunity = () => {
  return (
    <div>
      {/* for mobile */}
      <div className="md:hidden">
        <div className="border border-white p-6 md:mt-36 mt-16">
          <div className="flex flex-col gap-12 items-center justify-center text-center w-full h-full">
             {/* Images */}
          <div className=" ">
            <img
              src="/Group 105.png"
              alt="Right Koala"
              // className="w-[10rem] md:w-[15rem]"
            />
          </div>
            {/* Title */}
            <div>
              <h1 className="text-[3.125rem] md:text-[5.75rem] font-bold uppercase text-center">
                Eternal
              </h1>
              <h1 className="text-[3.125rem] md:text-[5.75rem] font-bold uppercase text-center">
                Community
              </h1>
            </div>
            {/* Explore Button and Social Links */}
            <div className="flex flex-col justify-center items-center gap-12 text-center">
              {/* Explore Button */}
              <Button>Explore Community</Button>

              {/* Social Icons */}
              <div className="flex gap-6">
                <a
                  href="https://t.me/+XrV_JVqTnotlNzk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:ring-2 ring-white hover:border-none rounded-full p-2 w-10 h-10 flex justify-center items-center"
                >
                  <FaTelegramPlane className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/EternalKoalas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:ring-2 ring-white hover:border-none rounded-full p-2 w-10 h-10 flex justify-center items-center"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/eternalkoalas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:ring-2 ring-white hover:border-none rounded-full p-2 w-10 h-10 flex justify-center items-center"
                >
                  <AiOutlineInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

         
        
        </div>
      </div>
      {/* for desktop */}
      <div className="hidden md:block">
        <div className="border border-white p-6 md:mt-36 mt-16 h-[40.5rem] max-h-[52.5rem] relative">
          <div className="flex flex-col gap-16 items-center justify-center text-center w-full h-full">
            {/* Title */}
            <div>
              <h1 className="text-[3.125rem] md:text-[5.75rem] font-bold uppercase text-center">
                Eternal
              </h1>
              <h1 className="text-[3.125rem] md:text-[5.75rem] font-bold uppercase text-center">
                Community
              </h1>
            </div>
            {/* Explore Button and Social Links */}
            <div className="flex justify-center items-center gap-32 text-center">
              {/* Explore Button */}
              <Button>Explore Community</Button>

              {/* Social Icons */}
              <div className="flex gap-6">
                <a
                  href="https://t.me/+XrV_JVqTnotlNzk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:ring-2 ring-white hover:border-none rounded-full p-2 w-10 h-10 flex justify-center items-center"
                >
                  <FaTelegramPlane className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com/EternalKoalas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:ring-2 ring-white hover:border-none rounded-full p-2 w-10 h-10 flex justify-center items-center"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/eternalkoalas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white hover:ring-2 ring-white hover:border-none rounded-full p-2 w-10 h-10 flex justify-center items-center"
                >
                  <AiOutlineInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="absolute right-0 top-0 -translate-x-2 translate-y-28">
            <img
              src="/Group 105.png"
              alt="Right Koala"
              className="w-[10rem] md:w-[18rem]"
            />
          </div>
          <div className="absolute bottom-0 left-0 transform translate-x-6">
            <img
              src="/arabic-koala.png"
              alt="Bottom Left Koala"
              // className="w-[10rem] md:w-[12rem]"
            />
          </div>
          <div className="absolute top-0 left-0 transform translate-x-8 ">
            <img
              src="/oculaus-koala.png"
              alt="Top Left Koala"
              // className="w-[8rem] md:w-[12rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCommunity;
