/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const FounderMessageSection = () => {
  return (
    <div>
      {/* for mobile */}
      <div className="md:hidden">
      <div className="flex flex-col md:flex-row justify-between md:mt-36 mt-16">
        {/* image */}
        <div className="text-center flex flex-col items-center justify-center my-8 md:m-auto relative">
          <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase">
            Founder’s Message
          </h1>{" "}
           {/* text */}
        <div className="md:w-1/2 px-[20px] py-6 ">
          {" "}
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed text-start">
            Hello World!
          </p>
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] text-justify">
          Eternal Koalas is more than an NFT collection – it’s the foundation of something much larger. As a founder, my mission is to create lasting value in Web3 by building an ecosystem that blends creativity, community, and innovation. This is just the beginning of a movement that will redefine how digital ownership and real-world impact come together. We’re not just creating NFTs; we’re creating opportunities, driving progress, and laying the groundwork for a future that benefits everyone involved.
          </p>{" "}
          <div className="mt-12 text-center">
            <button className=" border p-4 rounded-full text-[15px] md:text-[1.25rem]">
              About Team
            </button>
          </div>
        </div>
          <img src="./Group 86.png" alt="story-image" className="mt-6"/>
          <div className="absolute bottom-0 right-0 transform -translate-y-2 translate-x-6">
            {" "}
            <Image src="/Group 2.png" alt="" height={94} width={94} />
          </div>
        </div>{" "}
       
      </div></div>
      {/* for desktop */}
      <div className="hidden md:block">
      <div className="flex flex-col md:flex-row justify-between md:mt-36 mt-16">
        {/* image */}
        <div className="text-center flex flex-col items-center justify-center my-8 md:m-auto relative">
          <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] uppercase">
            Founder’s Message
          </h1>{" "}
          <img src="./Group 86.png" alt="story-image" />
          <div className="absolute bottom-0 right-0 transform -translate-y-2 translate-x-6">
            {" "}
            <Image src="/Group 2.png" alt="" height={94} width={94} />
          </div>
        </div>{" "}
        {/* text */}
        <div className="md:w-1/2 px-[20px] py-6 ">
          {" "}
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
            Hello World!
          </p>
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] leading-relaxed">
            I believe that it is our responsibility to leave Earth better than
            we found it. It is also our duty to protect these wild animals from
            any threats to their population. Through NFTs, we can connect the
            digital world with the physical one via raising awareness of
            important global topics like animal habitat loss, deforestation, and
            global warming. NFTs have proven to be a great method for charity.
            With our NFT project, we can raise awareness about Koalas and plant
            trees specifically for their survival.
          </p>{" "}
          <div className="mt-12 text-center">
            <button className=" border p-4 rounded-full text-[15px] md:text-[1.25rem]">
              About Team
            </button>
          </div>
        </div>
      </div></div>
    </div>
  );
};

export default FounderMessageSection;
