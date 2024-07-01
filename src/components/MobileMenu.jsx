import React from "react";
import { useTheme } from "../context/ThemeContext";
import light_icon from "../assets/light_icon.svg";
import dark_icon from "../assets/dark_icon.svg";
import { useLocation, useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const { theme, setTheme, isNavOpen, setIsNavOpen } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`${
        isNavOpen ? "top-0" : "top-[-130%]"
      } z-[21] navbar duration-500 fixed top-0 left-0 w-screen h-screen bg-black pt-[140px]`}
    >
      <nav
        onClick={() => setIsNavOpen(false)}
        className="flex flex-col gap-[50px] items-center cursor-pointer"
      >
        <p
          className={location.pathname === "/" && "active"}
          onClick={() => navigate("/")}
        >
          HOME
        </p>
        <p
          className={location.hash.includes("partners") && "active"}
          onClick={() => navigate("/about#partners")}
        >
          PARTNERS
        </p>
        <p
          className={location.hash.includes("roadmap") && "active"}
          onClick={() => navigate("/about#roadmap")}
        >
          ROAD MAP
        </p>
        <p
          className={location.hash.includes("team") && "active"}
          onClick={() => navigate("/about#team")}
        >
          TEAM
        </p>
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
