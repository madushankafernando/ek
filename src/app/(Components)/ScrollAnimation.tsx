"use client";

import React from "react";
import { useRef } from "react";
import { BsDot } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
// import { motion, useScroll } from "framer-motion";

const eternalKoalasRoadmap = [
  {
    title: "Phase 1: The Beginning",
    description: "Launch the Project and Set the Stage",
    points: [
      "🎨 Artwork Complete: 10,000 hand-drawn, unique Koala NFTs ready for minting.",
      "🌐 Website Live: Visit *eternalkoalas.io* for the full story, art previews, and updates.",
      "📢 Community Kickoff: Join us on X and Discord for sneak peeks, giveaways, and exciting announcements.",
    ],
  },
  {
    title: "Phase 2: Community Building",
    description: "Collect Whitelist Spots and Build Hype",
    points: [
      "🐨 Whitelist Collection: Start collecting whitelist spots for early supporters.",
      "🎁 NFT Giveaways: Host exclusive giveaways to reward active community members.",
      "🚀 Build the Community: Grow the Eternal Koalas community through events, sneak peeks, and collaborations.",
    ],
  },
  {
    title: "Phase 3: The Whitelist Mint",
    description: "Reward the Dedicated Supporters",
    points: [
      "💎 Whitelist Mint Launch: Exclusive minting opportunity for whitelist holders at a discounted price.",
      "🔥 Community Engagement: Celebrate with events, updates, and exclusive content for whitelist members.",
    ],
  },
  {
    title: "Phase 4: The Public Mint",
    description: "Grab Your Koala and Join the Mission",
    points: [
      "🌍 Public Mint Launch: Open minting for all, with a price set at *0.35 SOL*.",
      "🛒 Marketplace Access: Trading opens on Magic Eden and other platforms after all 10,000 NFTs are minted.",
      "🔥 Community Momentum: Ongoing events, partnerships, and announcements.",
    ],
  },
  {
    title: "Phase 5: The Utility",
    description: "Your Eternal Koala, Your Access",
    points: [
      "🛡 Exclusive Access: Private community channels, AMAs, and future project insights.",
      "🛍 Eco-Friendly Merch: Limited-edition Eternal Koalas gear for NFT holders.",
      "🎟 Future Opportunities: Whitelist spots, giveaways, and rewards for long-term supporters.",
      "🌱 Real-World Impact: Updates on the Eternal Koalas mission and ecosystem.",
    ],
  },
  {
    title: "Phase 6: The Token",
    description: "Powering the Eternal Koalas Ecosystem",
    points: [
      "📊 Transparency & Tokenomics: Publish a detailed tokenomics breakdown and roadmap for integration, ensuring fairness, clarity, and trust for the community.",
      "🪙 Eternal Token Launch: Introduce the official utility token for the Eternal Koalas community.",
      "🚀 Ecosystem Expansion: Integrate the Eternal Token into future phases, introducing AI, new utilities, and long-term sustainability.",
    ],
  },
];

const ScrollAnimation = () => {
  const ref = useRef(null);
  return (
    <div className="w-full">
      <ul
        ref={ref}
        className="flex list-none h-3/4 overflow-x-scroll py-5 w-full space-x-5 px-5"
      >
        {eternalKoalasRoadmap.map((phase, index) => (
          <div key={index} className="flex">
            <div>
            <li
              key={index}
              className="flex flex-col items-start flex-none h-[400px] w-[400px] bg-transparent tracking-wider"
            >
              <h2 className="text-xl mb-2">{phase.title} -</h2>
              <p className="italic mb-3">{phase.description}</p>
              <ul className="space-y-8">
                {phase.points.map((point, idx) => (
                  <li key={idx} className="flex mt-6 tracking-wide">
                    <BsDot className="text-red-500 text-2xl flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </li></div>
            <div>
              {" "}
              <FaArrowRight className="text-red-500 mr-6 " style={{ width: '60px', height: '50px' }}  />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ScrollAnimation;
