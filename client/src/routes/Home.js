import React from "react";
import Navbar from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import HomeMemory from "../components/Home/HomeMemory";
import BBall from "../components/Home/HomeBB";
import Home2048 from "../components/Home/Home2048";

const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HomeMemory />
      <Home2048 />
      <BBall />
      <Footer />
    </div>
  );
};

export default home;
