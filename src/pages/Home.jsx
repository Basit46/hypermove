import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import Heroes from "../components/Heroes";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Features />
      <Heroes />
    </div>
  );
};

export default Home;
