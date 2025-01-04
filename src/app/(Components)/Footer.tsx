// import Image from "next/image";
"use client";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
// import logoRound from "../../../public/EK Logo.svg";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-6 bg-[#AB9FF2] mt-36">
      {/* footer for mobile view */}
      <div className="flex flex-col items-center justify-center gap-8 md:hidden">
        <div className="mt-6 mb-6 flex items-center justify-center ">
          {/* logo */}
          <svg
            id="Group_81"
            data-name="Group 81"
            xmlns="http://www.w3.org/2000/svg"
            width="120.008"
            height="77.494"
            viewBox="0 0 120.008 77.494"
            fill="#000000"
          >
            <rect
              id="Rectangle_2"
              data-name="Rectangle 2"
              width="50.613"
              height="77.494"
              rx="25.307"
              transform="translate(34.246)"
              fill="#000000"
            />
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="28.003"
              height="28.003"
              rx="14.001"
              fill="#000000"
            />
            <rect
              id="Rectangle_4"
              data-name="Rectangle 4"
              width="28.003"
              height="28.003"
              rx="14.001"
              transform="translate(92.005)"
              fill="#000000"
            />
          </svg>
        </div>
        {/* links */}
        <div className="flex justify-between gap-36 text-m">
          <div className="flex flex-col gap-4">
            <a href="#" className="cursor-pointer text-black block">
              Eternal Koalas
            </a>
            <a href="#" className="cursor-pointer text-black block">
              Community
            </a>
            <a href="#" className="cursor-pointer text-black block">
              About Us
            </a>
          </div>
          <div>
            <a
              href="mailto:info@eternalkoalas.io"
              className="text-m text-black  cursor-pointer block"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* social icons */}
        <div className="flex gap-4 items-center">
          {/* <img src="/Group 47.png" alt=""  className="h-10 w-10" />
          <img src="/Group 46.png" alt=""  className="h-10 w-10" />
          <img src="/Group 45.png" alt=""  className="h-10 w-10" /> */}
          <a
            href="https://t.me/+XrV_JVqTnotlNzk8"
            target="_blank"
            className=" border border-black hover:ring-2 ring-black hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-white"
          >
            <FaTelegramPlane className="w-full h-full text-black" />
          </a>
          <a
            href="https://twitter.com/EternalKoalas"
            target="_blank"
            className=" border border-black hover:ring-2 ring-black hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-white"
          >
            <FaXTwitter className="w-full h-full text-black" />
          </a>

          <a
            href="https://www.instagram.com/eternalkoalas/"
            target="_blank"
            className=" border border-black hover:ring-2 ring-black hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-white"
          >
            <AiOutlineInstagram className="w-full h-full text-black" />
          </a>
        </div>
        <div className="flex flex-col gap-4 text-center text-m mb-6">
          <p className=" cursor-pointer block text-black">Digital Ownership license</p>
          <p className=" cursor-pointer block text-black">Eternal Whitepaper</p>
        </div>
        <hr className="border-t border-black w-full" />
      </div>

      {/* footer for laptop view */}
      <div className="hidden md:block">
        <div className="flex items-center justify-around gap-8 p-12 mb-4 mx-auto">
          <div className="mt-6 flex items-center justify-center ">
            {/* logo */}
            <svg
              id="Group_81"
              data-name="Group 81"
              xmlns="http://www.w3.org/2000/svg"
              width="150.008"
              height="107.494"
              viewBox="0 0 120.008 77.494"
              fill="#000000"
            >
              <rect
                id="Rectangle_2"
                data-name="Rectangle 2"
                width="50.613"
                height="77.494"
                rx="25.307"
                transform="translate(34.246)"
                fill="#000000"
              />
              <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="28.003"
                height="28.003"
                rx="14.001"
                fill="#000000"
              />
              <rect
                id="Rectangle_4"
                data-name="Rectangle 4"
                width="28.003"
                height="28.003"
                rx="14.001"
                transform="translate(92.005)"
                fill="#000000"
              />
            </svg>
          </div>
          {/* links */}
          <div className="flex justify-between gap-24 text-[1.344 rem]">
            {/* eternal kolas */}
            <div className="flex flex-col gap-4">
              <a href="#" className="cursor-pointer block text-black hover:text-neutral-700">
                Eternal Koalas
              </a>
              <a href="#" className="cursor-pointer block text-black hover:text-neutral-700">
                Community
              </a>
              <a href="#" className="cursor-pointer block text-black hover:text-neutral-700">
                About Us
              </a>
            </div>
            {/* contact */}
            <div>
              <a
                href="mailto:info@eternalkoalas.io"
                className=" cursor-pointer block text-black hover:text-neutral-700"
              >
                Contact Us
              </a>
            </div>
            {/* digital ownership */}
            <div className=" mb-6 flex flex-col gap-4">
              <p className=" cursor-pointer block text-black hover:text-neutral-700">Digital Ownership license</p>
              <p className=" cursor-pointer block text-black hover:text-neutral-700">Eternal Whitepaper</p>
            </div>
          </div>
        </div>
        <hr className="border-t border-black w-3/4 mx-auto" />
        {/* social icons */}
        <div className="flex gap-4 items-center justify-center mt-8">
          {/* <img src="/Group 47.png" alt=""  className="h-10 w-10" />
          <img src="/Group 46.png" alt=""  className="h-10 w-10" />
          <img src="/Group 45.png" alt=""  className="h-10 w-10" /> */}
          <a
            href="https://t.me/+XrV_JVqTnotlNzk8"
            target="_blank"
            className=" border border-black hover:ring-2 ring-black hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-black"
          >
            <FaTelegramPlane className="w-full h-full" />
          </a>
          <a
            href="https://twitter.com/EternalKoalas"
            target="_blank"
            className=" border border-black hover:ring-2 ring-black hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-black"
          >
            <FaXTwitter className="w-full h-full" />
          </a>

          <a
            href="https://www.instagram.com/eternalkoalas/"
            target="_blank"
            className=" border border-black hover:ring-2 ring-black hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-black"
          >
            <AiOutlineInstagram className="w-full h-full " />
          </a>
        </div>
      </div>
      <div className="text-center p-4 text-sm font-light md:text-base md:mt-6 text-black">
        © 2025 Eternal Koalas. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
