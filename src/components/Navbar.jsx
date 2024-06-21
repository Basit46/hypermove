import React from "react";
import logo from "../assets/logo.svg";
import light_icon from "../assets/light_icon.svg";
import dark_icon from "../assets/dark_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 bg-transparent w-full px-[60px] py-[20px] flex justify-between items-center">
      <img src={logo} alt="logo" />

      <nav className="flex gap-[20px] items-center">
        <p className="active">HOME</p>
        <span>/</span>
        <p>PARTNERS</p>
        <span>/</span>
        <p>ROAD MAP</p>
        <span>/</span>
        <p>TEAM</p>
      </nav>

      <div className="icons flex items-center h-[29px]">
        <div className="active">
          <img src={light_icon} alt="light icon" />
        </div>
        <div>
          <img src={dark_icon} alt="dark icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
