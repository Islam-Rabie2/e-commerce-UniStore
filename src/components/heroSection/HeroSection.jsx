import React from "react";
import hero from "../../assets/hero4.jpg";
const HeroSection = () => {
  return (
    <div>
      <img className="w-full h-40 lg:h-96" src={hero} alt="hero img" />
    </div>
  );
};

export default HeroSection;
