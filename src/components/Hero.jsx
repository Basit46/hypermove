import React from "react";

import heroBg from "../assets/hero_bg.png";
import part1 from "../assets/hero-part1.png";
import part2 from "../assets/hero-part2.png";
import part3 from "../assets/hero-part3.png";
import herobg1 from "../assets/hero-bg1.svg";
import herobg2 from "../assets/hero-bg2.svg";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#000513] dark:black">
      <img className="absolute top-0 left-0" src={heroBg} alt="game demo" />

      <div className="relative w-fit mx-auto pt-[80px] md:pt-[130px] ">
        <p className="text-center text-[12px] md:text-[16px] xmd:text-[24px] text-white opacity-[0.5]">
          WORLD'S FIRST
        </p>

        <h1 className="relative mt-[10px] md:mt-[20px] uppercase text-center text-[32px] md:text-[40px] xmd:text-[48px] leading-[1.1] font-[PilatExtended-Heavy]">
          <span className="text-[#00FFD1]">fps gaming</span>{" "}
          <span className="text-white">platform</span> <br />{" "}
          <span className="text-gradient text-[32px] xmd:text-[50px] xl:text-[103px] leading-[0.6]">
            on bitcoin
          </span>
          <img
            className="absolute hidden md:block left-[-67px] top-[-140px] animate-bounce-c"
            src={part1}
            alt="part"
          />
          <img
            className="absolute hidden md:block right-[130px] top-[-20px] animate-bounce-c"
            src={part2}
            alt="part"
          />
          <img
            className="absolute hidden md:block right-[-50px] top-[-6px] animate-bounce-c"
            src={part3}
            alt="part"
          />
        </h1>
      </div>

      <div className="mt-[20px] relative z-[2] flex justify-center gap-[5px] vsm:gap-[20px] items-center">
        <div className=" vsm:w-fit relative grid place-items-center">
          <p className="absolute top-1/2 -translate-y-1/2 font-[500] text-[14px] vsm:text-base font-Montserrat text-[#00FFD1]">
            Marketplace
          </p>
          <img src={herobg1} alt="bg" />
        </div>

        <div className="w-[140px] vsm:w-fit relative grid place-items-center">
          <p className="absolute top-1/2 -translate-y-1/2 font-[600] text-[14px] vsm:text-base font-Montserrat text-white">
            Download Game
          </p>
          <img src={herobg2} alt="bg" />
        </div>
      </div>

      <div className="absolute bottom-[-50px] left-0 z-[-1] w-full h-[60px] gr bg-gradient-to-b from-black to-transparent"></div>
    </div>
  );
};

export default Hero;
