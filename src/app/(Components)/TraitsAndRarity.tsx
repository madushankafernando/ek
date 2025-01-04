import React from "react";

const TraitsAndRarity = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:mt-36 mt-16">
        {/* text */}
        <div className="md:w-1/2 px-[20px] py-6">
          {" "}
          <h1 className="text-[3.125rem] md:text-[4.6rem] font-bold mb-[26px] md:mb-[27px] uppercase text-center md:text-left">
            Eternal Koalas<br/>Traits & Rarity
          </h1>
          <p className="text-[15px] md:text-[1.25rem] text-center md:text-justify">
          Eternal Koalas is a collection of 4,444 unique NFTs that eternalize koalas on the blockchain, blending bold, hand-drawn art with rarity and creativity. Each koala is brought to life through anime-inspired elements, expressive human traits, and striking black outlines, making every piece a visual masterpiece.
          </p>
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] text-center md:text-justify">
          The collection features a wide variety of traits across different rarity levels, from <strong>common accessories</strong> like sunglasses and hoodies to <strong>ultra-rare items</strong> such as crowns and VR headsets. At the pinnacle of the collection are the <strong>1-of-1 super rare NFTs</strong>, each a one-of-a-kind creation designed to captivate collectors.
          </p>
          <p className="mt-6 md:mt-10 text-[15px] md:text-[1.25rem] text-center md:text-justify">
          Every Eternal Koala is uniquely generated with meticulous attention to detail, ensuring a perfect balance of individuality, collectibility, and timeless appeal. By immortalizing these vibrant characters on the blockchain, we’re creating a legacy that blends art, rarity, and purpose for future generations.
          </p>
        </div>
        <div className="text-center flex flex-col items-center justify-center gap-8 my-8 md:m-auto px-6 ">
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Total Traits Counts</div>
            <div>150+</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Background</div>
            <div>09</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Merch</div>
            <div>29</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Fur</div>
            <div>26</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Mouths</div>
            <div>22</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Eyes</div>
            <div>23</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Eyewear</div>
            <div>08</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Headgears</div>
            <div>21</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Accessories</div>
            <div>11</div>
          </div>
          <div className="flex justify-between gap-32 border-b w-96">
            <div>Mustaches</div>
            <div>05</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraitsAndRarity;
