import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import Welcome from "../Welcome";
import Utilities from "../Utilities";
import EternalTokenSection from "../EternalTokenSection";
import Collaborate from "../Collaborate";
import EternalMapSection from "../EternalMapSection";
import FounderMessageSection from "../FounderMessageSection";
import HomeCommunity from "../HomeCommunity";
// import ScrollAnimation from "../ScrollAnimation";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <Hero />
      </div>
      <div className="md:ml-[135px] mx-6 md:mr-32">
        <Welcome />
        <Utilities />
        <EternalTokenSection />
      </div>{" "}
      <EternalMapSection />
      {/* <ScrollAnimation/> */}
      <div className="md:ml-[135px] mx-6 md:mr-32">
        {" "}
        <HomeCommunity />
        <FounderMessageSection />
        <Collaborate />
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;
