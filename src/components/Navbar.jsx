import React from "react";
import logo from "../assets/logo.svg";
import light_icon from "../assets/light_icon.svg";
import dark_icon from "../assets/dark_icon.svg";
import { useTheme } from "../context/ThemeContext";
import menu from "../assets/menuIcon.svg";
import { FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme, isNavOpen, setIsNavOpen } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      id="navbar"
      className="navbar z-[50] absolute top-0 bg-transparent w-full px-[20px] sm:px-[40px] xmd:px-[60px] py-[20px] flex justify-between items-center"
    >
      <img
        onClick={() => navigate("/")}
        className="h-[29px] vsm:h-fit cursor-pointer"
        src={logo}
        alt="logo"
      />

      <nav className="hidden lg:flex gap-[20px] items-center cursor-pointer">
        <p
          className={location.pathname === "/" && "active"}
          onClick={() => navigate("/")}
        >
          HOME
        </p>
        <span>/</span>
        <p
          className={location.hash.includes("partners") && "active"}
          onClick={() => navigate("/about#partners")}
        >
          PARTNERS
        </p>
        <span>/</span>
        <p
          className={location.hash.includes("roadmap") && "active"}
          onClick={() => navigate("/about#roadmap")}
        >
          ROAD MAP
        </p>
        <span>/</span>
        <p
          className={location.hash.includes("team") && "active"}
          onClick={() => navigate("/about#team")}
        >
          TEAM
        </p>
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

      <button
        onClick={() => setIsNavOpen((prev) => !prev)}
        className="flex lg:hidden"
      >
        {isNavOpen ? (
          <FaTimes className="text-[red] text-[25px]" />
        ) : (
          <img src={menu} alt="menu bar" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
