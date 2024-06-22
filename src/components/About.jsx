import React from "react";
import img1 from "../assets/about-img1.png";
import img2 from "../assets/about-img2.png";
import arrow from "../assets/about-arrow.png";
import aboutBtm from "../assets/about-btm.png";
import aboutShape from "../assets/about-triangle.png";
import gradient1 from "../assets/about-gradient1.png";
import gradient2 from "../assets/about-gradient2.png";
import gradient3 from "../assets/about-gradient3.png";

const About = () => {
  return (
    <div className="relative mt-[0px] w-full bg-[#000513] dark:bg-black">
      <h1 className="pt-[30px] text-outline text-[95.86px] text-transparent text-center font-[PilatExtended-Heavy]">
        HYPERMOVE
      </h1>

      <div className="relative z-[2] mt-[-40px] flex justify-center gap-[20px]">
        <div className="mt-[80px] w-[35%] 2xl:w-[37%] flex flex-col items-center">
          <p className="text-center">
            <span className="text-[#00FFD1]">Hypermove</span>{" "}
            <span className="opacity-[0.5] text-white">
              seamlessly integrates cutting-edge solutions like account
              abstraction & bridging the gap between web2 and web3 gaming.
            </span>
          </p>
          <li className="mt-[20px] text-center text-white opacity-[0.5] list-disc">
            Our mission is to elevate the gaming experience by introducing
            in-game NFTs, DeFi integration, AI agents, NPCs, and a diverse range
            of game modes.
          </li>
          <img className="mt-[40px] h-fit w-fit" src={arrow} alt="arrow" />
        </div>

        <div className="">
          <img src={img1} alt="game demo" />
        </div>
      </div>

      <img
        className="absolute bottom-[-300px] right-[0px]"
        src={img2}
        alt="weapon"
      />
      <img
        className="mt-[-340px] bsolute bottom-[-200px]"
        src={aboutBtm}
        alt="gradient"
      />
      <img
        className="absolute left-[60px] bottom-[60px]"
        src={aboutShape}
        alt="gradient"
      />

      {/* Blur gradients */}
      <img
        className="absolute top-[-149px] left-0 "
        src={gradient1}
        alt="gradient"
      />
      <img className="absolute top-0 right-0 " src={gradient2} alt="gradient" />
      <img className="absolute top-0 right-0" src={gradient3} alt="gradient" />
    </div>
  );
};

export default About;
