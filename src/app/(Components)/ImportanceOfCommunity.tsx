import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ImportanceOfCommunity = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col md:flex-row justify-between items-center md:mt-36 mt-16">
        {/* WHO WE ARE SECTION */}
        <div className="md:w-3/4 px-[20px] py-6">
          {" "}
          <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase md:text-left text-center">
            Importance of our Community
          </h1>
          <p className="text-[15px] md:text-[1.25rem] text-center md:text-justify">
            The success of NFT projects is derived from a strong community.
            Power comes in numbers. Working on a common goal together
            significantly increases the chances of success. To pull together
            people with similar interests, desires, missions, or purposes, and
            make the world a better place aligns with the values that we stand
            by at Eternal Koalas.
          </p>
        </div>
        <div className="text-center flex items-center justify-center my-8 md:m-auto ">
          {/* svg */}
          <div className="flex gap-4 items-center">
            {/* <img src="/Group 47.png" alt=""  className="h-10 w-10" />
          <img src="/Group 46.png" alt=""  className="h-10 w-10" />
          <img src="/Group 45.png" alt=""  className="h-10 w-10" /> */}
            <a
              href="https://t.me/+XrV_JVqTnotlNzk8"
              target="_blank"
              className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-white"
            >
              <FaTelegramPlane className="w-full h-full" />
            </a>
            <a
              href="https://twitter.com/EternalKoalas"
              target="_blank"
              className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-white"
            >
              <FaXTwitter className="w-full h-full" />
            </a>

            <a
              href="https://www.instagram.com/eternalkoalas/"
              target="_blank"
              className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-white"
            >
              <AiOutlineInstagram className="w-full h-full hover:text-white" />
            </a>
          </div>
          {/* <Image src="/Group 2.png" alt="" height={94} width={94} className="w-64 h-64"/> */}
        </div>
      </div>
    </div>
  );
};

export default ImportanceOfCommunity;
