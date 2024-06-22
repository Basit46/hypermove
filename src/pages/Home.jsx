import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Heroes from "../components/Heroes";
import Token from "../components/Token";
import Ecosystem from "../components/Ecosystem";
import line2 from "../assets/token-line2.png";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full relative">
      <Hero />
      <About />
      <Features />
      <Heroes />

      <Token />
      <img
        className="mt-[20px] absolute left-0 w-full"
        src={line2}
        alt="line"
      />
      <Ecosystem />
      <Blog />
      <Footer />
    </div>
  );
};

export default Home;
