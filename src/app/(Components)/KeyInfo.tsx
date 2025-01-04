/* eslint-disable @next/next/no-img-element */
import React from "react";

const KeyInfo = () => {
  return (
    <div>
      <h1 className="text-[3.125rem] md:text-[5.2rem] font-bold mb-[26px] md:mb-[27px] text-center uppercase md:mt-36 mt-16">
        Key Information
      </h1>
      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
          <div className="lg:col-span-2">
            <div className=" lg:text-lg   border-b py-8 description">
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Total number of tokens </h1>
                </div>
                <div className="col-span-2  text-center  ">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1>4444</h1>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Price Per Token (whitelist) </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1>0.22 SOL</h1>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Price Per Token (public sale) </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1>0.44 SOL</h1>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Token Type </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1>TBA</h1>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Blockchain </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1> Solana</h1>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Smart Contract Address </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1 className="break-words">TBA</h1>
                </div>
              </div>
            </div>
            <div className=" lg:text-lg  border-b  py-8 description">
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Number of traits </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1>150+</h1>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Number of attributes </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1>9</h1>
                </div>
              </div>
            </div>
            <div className=" lg:text-lg   py-8 description">
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Tokens withheld from sale </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <h1>444 ( giveaways / marketing / team )</h1>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-3 py-2">
                <div className="col-span-5">
                  <h1 className="">Royalty fees </h1>
                </div>
                <div className="col-span-2  text-center">
                  <h1>|</h1>
                </div>
                <div className="col-span-5">
                  <p>5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/Group 98.png" alt="" className="" />
        </div>
      </div>
    </div>

    // <div className="container mx-auto">
    //   <h1 className="font-title text-title lg:text-7xl ">Key Information</h1>
    //   <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">
    //     <div className="lg:col-span-2">
    //       <div className=" lg:text-lg   border-b py-8 description">
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Total number of tokens </h1>
    //           </div>
    //           <div className="col-span-2  text-center  ">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1>4444</h1>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Price Per Token (whitelist) </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1>0.22 SOL</h1>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Price Per Token (public sale) </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1>0.44 SOL</h1>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Token Type </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1>TBA</h1>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Blockchain </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1> Solana</h1>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Smart Contract Address </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1 className="break-words">TBA</h1>
    //           </div>
    //         </div>
    //       </div>
    //       <div className=" lg:text-lg  border-b  py-8 description">
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Number of traits </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1>150+</h1>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Number of attributes </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1>9</h1>
    //           </div>
    //         </div>
    //       </div>
    //       <div className=" lg:text-lg   py-8 description">
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Tokens withheld from sale </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <h1>444 ( giveaways / marketing / team )</h1>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-12 gap-3 py-2">
    //           <div className="col-span-5">
    //             <h1 className="">Royalty fees </h1>
    //           </div>
    //           <div className="col-span-2  text-center">
    //             <h1>|</h1>
    //           </div>
    //           <div className="col-span-5">
    //             <p>5%</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     </div>

    // </div>
  );
};

export default KeyInfo;
