import React from "react";
import img1 from "../assets/about-img1.png";
import arrow from "../assets/about-arrow.png";

const About = () => {
  return (
    <div>
      <h1 className="mt-[30px] text-outline text-[95.86px] text-transparent text-center font-[PilatExtended-Heavy]">
        HYPERMOVE
      </h1>

      <div className="mt-[-40px] flex justify-center  gap-[30px]">
        <div className="mt-[80px] w-[37%] flex flex-col items-center">
          <p className="text-center">
            <span className="text-[#00FFD1]">Hypermove</span>{" "}
            <span className="opacity-[0.5]">
              seamlessly integrates cutting-edge solutions like account
              abstraction & bridging the gap between web2 and web3 gaming.
            </span>
          </p>
          <li className="mt-[20px] text-center opacity-[0.5] list-disc">
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
    </div>
  );
};

export default About;
