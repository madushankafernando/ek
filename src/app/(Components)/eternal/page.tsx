import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import StoryPage from "../StoryPage";
import MemberShip from "../MemberShip";
import Ownership from "../Ownership";
import TraitsAndRarity from "../TraitsAndRarity";
import KeyInfo from "../KeyInfo";
import Questions from "../Questions";

const EternalKoalas = () => {
  return (
    <div>
      <Navbar />
      <div className="md:ml-[135px] mx-6 md:mr-32">
        <StoryPage />
        <MemberShip />
        <Ownership />
        <TraitsAndRarity />
        <KeyInfo/>
        <Questions/>
      </div>
      <Footer />
    </div>
  );
};

export default EternalKoalas;
