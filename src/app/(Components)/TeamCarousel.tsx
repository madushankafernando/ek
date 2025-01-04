/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";

const teamData = [
  {
    id: 1,
    name: "Yousef",
    role: "Founder",
    image: "/Komala.png",
    username: "yousefeth",
  },
  {
    id: 2,
    name: "Kareem",
    role: "Co-Founder",
    image: "/careem.png",
    username: "kalsheth",
  },
  {
    id: 3,
    name: "Ayah",
    role: "Designer",
    image: "/ayah.png",
    username: "ayah_maklad",
  },
  {
    id: 4,
    name: "Madushanka",
    role: "Developer",
    image: "/madushanka.png",
    username: "mr_madushanka",
  },
];

const TeamCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % teamData.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  return (
    <div>
      {/* for mobile */}
      <div className="md:hidden">
        <div className="flex flex-col md:flex-row mt-[4rem] gap-6 px-4">
          <div className="p-2">
            <h2 className="text-[3.125rem] md:text-[5.75rem] font-bold leading-tight">
              THE TEAM-
            </h2>
            <h3 className="text-[1.875rem] md:text-[4.406rem] font-medium mt-2">
              {teamData[current].name}
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-[15px] md:text-[1.25rem]">
              {teamData[current].role}
            </p>

            <div className="flex ">
              <a
                href={`https://x.com/${teamData[current].username}`}
                target="_blank"
                className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-white"
              >
                <FaXTwitter className="w-full h-full" />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {/* Big Image Section */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                src={teamData[current].image}
                alt={teamData[current].name}
                className="max-w-[330px] max-h-[330px] w-full h-auto rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Carousel Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              {/* Carousel Thumbnails */}
              <div className="flex flex-col">
                <div className="flex justify-center md:justify-start space-x-2 overflow-auto scrollbar-hide">
                  {teamData.map((member, index) => (
                    <div
                      key={member.id}
                      className={`w-[80px] h-[80px] ${
                        current === index ? "rounded-full" : "rounded-md"
                      } overflow-hidden cursor-pointer border-4 transition-transform duration-300 ${
                        current === index
                          ? "border-white "
                          : "border-transparent"
                      }`}
                      onClick={() => setCurrent(index)}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
                  <button onClick={handlePrev} className="">
                    <img src="/arrow-left.png" alt="Previous" />
                  </button>
                  <button onClick={handleNext} className="">
                    <img
                      src="/arrow-left.png"
                      alt="Next"
                      className=" transform rotate-180"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* for desktop */}
      <div className="hidden md:block md:mr-[135px]">
        <div className="flex flex-col md:flex-row mt-[7.438rem] gap-20 items-center justify-center">
          {/* Big Image Section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={teamData[current].image}
              alt={teamData[current].name}
              className="max-w-[550px] max-h-[550px] w-full h-auto rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Carousel Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-[3.125rem] md:text-[5.2rem] font-bold leading-tight">
              THE TEAM-
            </h2>
            <h3 className="text-[3.125rem] font-medium mt-4">
              {teamData[current].name}
            </h3>
            <p className="text-gray-400 mb-[29px] leading-relaxed text-[21.5 px]  md:text-[22px]">
              {teamData[current].role}
            </p>
            <div className="flex mb-10">
              <a
                href={`https://x.com/${teamData[current].username}`}
                target="_blank"
                className=" border border-white hover:ring-2 ring-white hover:border-none  rounded-full p-2 cursor-pointer w-10 h-10 hover:text-white text-white"
              >
                <FaXTwitter className="w-full h-full" />
              </a>
            </div>

            {/* Carousel Thumbnails */}
            <div className="flex flex-col">
              <div className="flex justify-center md:justify-start space-x-2 overflow-auto scrollbar-hide">
                {teamData.map((member, index) => (
                  <div
                    key={member.id}
                    className={`w-[120px] h-[120px] ${
                      current === index ? "rounded-full" : "rounded-md"
                    } overflow-hidden cursor-pointer border-4 transition-transform duration-300 ${
                      current === index ? "border-white " : "border-transparent"
                    }`}
                    onClick={() => setCurrent(index)}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
                <button onClick={handlePrev} className="">
                  <img src="/arrow-left.png" alt="Previous" />
                </button>
                <button onClick={handleNext} className="">
                  <img
                    src="/arrow-left.png"
                    alt="Next"
                    className=" transform rotate-180"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCarousel;
