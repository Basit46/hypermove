import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Heroes from "../components/Heroes";
import Token from "../components/Token";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Features />
      <Heroes />
      <Token />
    </div>
  );
};

export default Home;
