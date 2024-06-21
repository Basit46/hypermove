import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Features />
    </div>
  );
};

export default Home;
