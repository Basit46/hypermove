import React from "react";
import logo from "../assets/logo.svg";
import light_icon from "../assets/light_icon.svg";
import dark_icon from "../assets/dark_icon.svg";
import { useTheme } from "../context/ThemeContext";
import menu from "../assets/menuIcon.svg";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="navbar absolute top-0 bg-transparent w-full px-[20px] sm:px-[40px] xmd:px-[60px] py-[20px] flex justify-between items-center">
      <img className="h-[29px] vsm:h-fit" src={logo} alt="logo" />

      <nav className="hidden lg:flex gap-[20px] items-center">
        <p className="active">HOME</p>
        <span>/</span>
        <p>PARTNERS</p>
        <span>/</span>
        <p>ROAD MAP</p>
        <span>/</span>
        <p>TEAM</p>
      </nav>

      <div className="hidden icons lg:flex items-center h-[29px] cursor-pointer">
        <div
          onClick={() => setTheme("light")}
          className={`${theme !== "dark" && "active"} duration-200`}
        >
          <img src={light_icon} alt="light icon" />
        </div>
        <div
          onClick={() => setTheme("dark")}
          className={`${theme === "dark" && "active"} duration-200`}
        >
          <img src={dark_icon} alt="dark icon" />
        </div>
      </div>

      <button className="flex lg:hidden">
        <img src={menu} alt="menu bar" />
      </button>
    </div>
  );
};

export default Navbar;
