import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import EternalCommunitySection from "../EternalCommunitySection";
import LogoGrid from "../LogoGrid";
import CommunityMission from "../CommunityMission";
import ImportanceOfCommunity from "../ImportanceOfCommunity";
import PartOfCommunity from "../PartOfCommunity";
import PreMintSection from "../PreMintSection";
import JoinCommunity from "../JoinCommunity";

const CommunityPage = () => {
  return (
    <div>
      <Navbar />
      <div className="md:ml-[135px] md:mr-32">
        <EternalCommunitySection />
        <LogoGrid />
        <CommunityMission />
        <ImportanceOfCommunity />
      </div>
      <PartOfCommunity />
      <PreMintSection />
      <div className="md:ml-[135px] md:mr-32">
        {" "}
        <JoinCommunity />
      </div>

      <Footer />
    </div>
  );
};

export default CommunityPage;
