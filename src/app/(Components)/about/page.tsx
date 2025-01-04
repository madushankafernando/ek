import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import WhoSection from "../WhoSection";
import Collaborate from "../Collaborate";
import TeamCarousel from "../TeamCarousel";
import PreMintSection from "../PreMintSection";

const AboutPage = () => {
  return (
    <div>
      {/* <Banner/> */}
      <Navbar />
      <div className=" md:ml-[135px]">
        <div className="flex flex-col md:mx-6">
          {/* who we are and eternal kolas */}
         <WhoSection/>
         {/* team section*/}
         <TeamCarousel/>
        </div>
      </div>
      <div className="flex flex-col md:mt-[149px]">
         {/* pre mint section */}
         <PreMintSection/>
          {/* collaboration */}
          <Collaborate/>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
