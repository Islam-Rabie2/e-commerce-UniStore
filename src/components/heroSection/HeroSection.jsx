import React from "react";
import hero from "../../assets/hero1.png";
const HeroSection = () => {
  return (
    <div>
      <img className="w-full h-40 lg:h-full" src={hero} alt="hero img" />
    </div>
  );
};

export default HeroSection;
