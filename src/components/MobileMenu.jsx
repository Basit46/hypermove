import React from "react";
import { useTheme } from "../context/ThemeContext";
import light_icon from "../assets/light_icon.svg";
import dark_icon from "../assets/dark_icon.svg";

const MobileMenu = () => {
  const { theme, setTheme, isNavOpen, setIsNavOpen } = useTheme();
  return (
    <div
      className={`${
        isNavOpen ? "top-0" : "top-[-130%]"
      } z-[21] navbar duration-500 fixed top-0 left-0 w-screen h-screen bg-black pt-[140px]`}
    >
      <nav className="flex flex-col gap-[50px] items-center">
        <p onClick={() => setIsNavOpen(false)} className="active">
          HOME
        </p>

        <p onClick={() => setIsNavOpen(false)}>PARTNERS</p>

        <p onClick={() => setIsNavOpen(false)}>ROAD MAP</p>

        <p onClick={() => setIsNavOpen(false)}>TEAM</p>
      </nav>

      <div
        onClick={() => setIsNavOpen(false)}
        className="mt-[50px] icons flex flex-col gap-[50px] items-center cursor-pointer"
      >
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
    </div>
  );
};

export default MobileMenu;
