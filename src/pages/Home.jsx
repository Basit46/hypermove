import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
  return (
    <div className="home h-screen">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
