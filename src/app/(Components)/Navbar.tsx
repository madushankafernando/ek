"use client";
import React, { useState } from "react";
import { Button } from "./Button";
import Image from "next/image";
import { AiOutlineClose, AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10 mx-[20px] md:mx-[46px]">
      
          <div className="flex justify-between items-center p-3">
            <div>
              <div className="h-10 w-full rounded-lg inline-flex justify-center items-center p-2 gap-3">
                <Image src="/Group 2.png" alt="" height={64} width={64}/>
                <div className="ms:ml-3 md:ml-6">
                  <Button>WAITLIST NOW</Button>
                </div>
                <div className="hidden md:block md:ml-6">
                  <nav className="flex gap-8 text-base">
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition"
                    >
                      ETERNAL KOALAS
                    </a>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition"
                    >
                      COMMUNITY
                    </a>
                    <a
                      href="#"
                      className="text-[#AB9FF2] hover:text-white transition"
                    >
                      ABOUT US
                    </a>
                  </nav>
                </div>
              </div>
            </div>
{/* social links */}
            <div className="flex gap-4 items-center">
              <button className="text-2xl font-bold md:hidden border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white" onClick={() => setIsOpen(!isOpen)} >  {isOpen ? <AiOutlineClose /> : <TbMenu />}</button>
          <a
            href="https://t.me/+XrV_JVqTnotlNzk8"
            target="_blank"
            className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white hidden md:block"
          >
            <FaTelegramPlane className="w-full h-full" />
          </a>
          <a
            href="https://twitter.com/EternalKoalas"
            target="_blank"
            className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white hidden md:block"
          >
            <FaXTwitter className="w-full h-full" />
          </a>

          <a
            href="https://www.instagram.com/eternalkoalas/"
            target="_blank"
            className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white hidden md:block"
          >
            <AiOutlineInstagram className="w-full h-full hover:text-white" />
          </a>
    
            </div>
          </div>
          {/* sidebar */}
          <div
        className={`fixed top-0 right-0 h-full w-full bg-[#000000] p-6 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl focus:outline-none border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white"
        >
         <AiOutlineClose />
        </button>

          {/* Sidebar Links */}
          <ul className="mt-12 space-y-6">
            <li className="border-b pb-1 w-full">
              <a href="#" className="text-xl italic capitalize">
                Home
              </a>{" "}
            </li>
            <li className="border-b pb-1">
              <a href="#" className="text-xl italic capitalize">
                Eternal Koalas
              </a>
            </li>
            <li className="border-b pb-1">
              <a href="#" className="text-xl italic capitalize">
                Eternal Map
              </a>
            </li>
            <li className="border-b pb-1">
              <a href="#" className="text-xl italic capitalize">
                Community
              </a>
            </li>
            <li className="border-b pb-1">
              <a href="#" className="text-xl italic capitalize">
                About Us
              </a>
            </li>
            <li className="border-b pb-1">
              <a href="#" className="text-xl italic capitalize">
                Contact Us
              </a>
            </li>
            <li className="border-b pb-1">
              <a href="#" className="text-xl italic capitalize">
                Digital Ownership & License
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://t.me/+XrV_JVqTnotlNzk8"
              target="_blank"
              className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white"
            >
              <FaTelegramPlane className="w-full h-full" />
            </a>
            <a
              href="https://twitter.com/EternalKoalas"
              target="_blank"
              className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white"
            >
              <FaXTwitter className="w-full h-full" />
            </a>

            <a
              href="https://www.instagram.com/eternalkoalas/"
              target="_blank"
              className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white "
            >
              <AiOutlineInstagram className="w-full h-full hover:text-white" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
