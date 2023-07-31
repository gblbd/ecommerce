import React from "react";
import HomeContactSection from "../../components/HomeComponents/HomeContactSection/HomeContactSection";
import HomeHeroCarousol from "../../components/HomeComponents/HomeHeroSection/HomeHeroCarousol";
import HomeCategorySection from "../../components/HomeComponents/HomeCategoryAndProductSection/HomeCategorySection/HomeCategorySection";
import HomeOfferSection from "../../components/HomeComponents/HomeOfferSection/HomeOfferSection";
import HomeServiceSection from "../../components/HomeComponents/HomeServiceSection/HomeServiceSection";
import HomeSpecialitySection from "../../components/HomeComponents/HomeSpecialitySection/HomeSpecialitySection";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <HomeHeroCarousol></HomeHeroCarousol>
      <HomeSpecialitySection></HomeSpecialitySection>
      <HomeCategorySection></HomeCategorySection>
      <HomeOfferSection></HomeOfferSection>
      <HomeServiceSection></HomeServiceSection>
      <HomeContactSection></HomeContactSection>
    </div>
  );
};

export default Home;
