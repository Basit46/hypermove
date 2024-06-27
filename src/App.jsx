import React from "react";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Weapons from "./pages/Weapons";
import Story from "./pages/Story";
import GameModes from "./pages/GameModes";

function App() {
  return (
    <div className="max-w-[1500px] mx-auto overflow-x-hidden bg-white dark:bg-body-gradient dark:bg-[#000513] text-black dark:text-white">
      <Navbar />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/story" element={<Story />} />
        <Route path="/gamemodes" element={<GameModes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
