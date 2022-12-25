import "./hero.css";

import React from "react";

import heroImg from "../../assets/img/games.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <img className="hero-img" src={heroImg} alt="Hero" />
      </div>
      <div className="Rotating-container">
        {/* Placeholder - test code for rotating container before implementation */}
      </div>
    </div>
  );
};

export default Hero;
