/* eslint-disable @next/next/no-img-element */
import React from 'react'

const TeamSection = () => {
  return (
    <div> {/* team section for mobile */}
    <div className="md:hidden">
      <div className="flex flex-col mt-8">
        {/* team text */}
        <div className="mt-4">
          <h2 className="text-[3.125rem] md:text-[5.75rem] font-bold ">THE TEAM-</h2>
          <p className="text-[30px] font-bold mt-2">YOUSEF AL-SHARIF</p>
          <p className="text-gray-400 mt-2 mb-2">FOUNDER</p>
          <img
            src="/Group 46.png"
            alt=""
            className="w-8 h-8 rounded-md mb-10"
          />
        </div>
        {/* main image */}
        <div className="">
          <img
            src="/Komala.png"
            alt="Koala Main"
            className="rounded-sm"
          />
        </div>
        {/* IMAGE CAROUSEL */}
        <div className="flex flex-col mb-8">
          <div className="flex justify-between items-center space-x-4 mt-6">
            <img
              src="/Komala.png"
              alt="Koala 1"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full cursor-pointer"
            />
            <img
              src="/careem.png"
              alt="Koala 2"
              className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer"
            />
            <img
              src="/careem-1.png"
              alt="Koala 3"
              className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer"
            />
            <img
              src="/careem-2.png"
              alt="Koala 4"
              className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer"
            />
          </div>
          <div className="flex flex-row items-center justify-center gap-4 mt-4 md:justify-start">
            <img src="/arrow-left.png" alt="Right Arrow" />
            <img
              src="/arrow-left.png"
              alt="Right Arrow"
              className="transform rotate-180"
            />
          </div>
        </div>
      </div>
    </div>
    {/* team section for laptop*/}
    <div className="hidden md:block">
      <div className="flex mt-[7.438rem] gap-10">
        {/* main image */}
        <div className="mr-10">
          <img
            src="/Komala.png"
            alt="Koala Main"
            className="w-96 h-full rounded-md"
          />
        </div>
        <div className="">
          <h2 className="text-[3.125rem] md:text-[5.75rem] font-bold leading-relaxed ">THE TEAM-</h2>
          <p className="text-[4.406rem]  font-bold mt-[22px] leading-relaxed">
            YOUSEF AL-SHARIF
          </p>
          <p className="text-gray-400 mt-2 mb-[29px] leading-relaxed text-[22px]">FOUNDER</p>
          <img
            src="/Group 46.png"
            alt=""
            className="w-14 h-14 rounded-md mb-10"
          />
          {/* IMAGE CAROUSEL */}
          <div className="flex flex-col mt-6">
            <div className="flex justify-center items-center space-x-4 ">
              <img
                src="/Komala.png"
                alt="Koala 1"
                className="w-[10.813rem] h-[10.813rem] md:w-20 md:h-20 rounded-full cursor-pointer"
              />
              <img
                src="/careem.png"
                alt="Koala 2"
                className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer"
              />
              <img
                src="/careem-1.png"
                alt="Koala 3"
                className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer"
              />
              <img
                src="/careem-2.png"
                alt="Koala 4"
                className="w-16 h-16 md:w-20 md:h-20 rounded-md cursor-pointer"
              />
            </div>
            <div className="flex flex-row items-center justify-center gap-4 mt-6 md:justify-start">
              <img src="/arrow-left.png" alt="Right Arrow" />
              <img
                src="/arrow-left.png"
                alt="Right Arrow"
                className="transform rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
    </div></div>
  )
}

export default TeamSection