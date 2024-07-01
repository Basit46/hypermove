import React, { useRef } from "react";
import img1 from "../assets/about-img1.png";
import img2 from "../assets/about-img2.png";
import arrow from "../assets/about-arrow.png";
import aboutBtm from "../assets/about-btm.png";
import aboutShape from "../assets/about-triangle.png";
import gradient1 from "../assets/about-gradient1.png";
import gradient2 from "../assets/about-gradient2.png";
import gradient3 from "../assets/about-gradient3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const aboutRef = useRef();

  useGSAP(
    () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 50%",
        },
      });

      const textElement = document.querySelector(".text1");
      const split = new SplitType(textElement, { types: "chars" });
      const textElement2 = document.querySelector(".text2");
      const split2 = new SplitType(textElement2, { types: "chars" });
      const textElement3 = document.querySelector(".text3");
      const split3 = new SplitType(textElement3, { types: "chars" });

      tl2.from(split.chars, {
        duration: 1,
        y: 80,
        stagger: 0.05,
      });
      tl2.from(split2.chars, {
        duration: 0.5,
        opacity: 0,
        stagger: 0.01,
      });
      tl2.from(split3.chars, {
        duration: 0.5,
        opacity: 0,
        stagger: 0.01,
      });
      tl2.from(".img", {
        duration: 1,
        opacity: 0,
      });
    },
    { scope: aboutRef }
  );

  return (
    <div
      ref={aboutRef}
      className="relative h-[65vh] vsm:h-screen md:h-[120vh] xl:h-fit w-full bg-[#000513] dark:bg-[#000513]"
    >
      <h1 className="text1 overflow-hidden leading-none mb-[20px] pt-[30px] text-outline text-[20px] vsm:text-[30px] md:text-[50px] xmd:text-[95.86px] text-transparent text-center font-[PilatExtended-Heavy]">
        HYPERMOVE
      </h1>

      <div className="mt-[-20px] relative z-[2] vsm:mt-[-40px] flex flex-col-reverse xl:flex-row xl:justify-center gap-[20px] vsm:gap-0 xl:gap-[20px]">
        <div className="mt-[-50px] xl:mt-[80px] mx-auto w-[90%] xmd:w-[70%] xl:w-[35%] 2xl:w-[37%] flex flex-col items-center">
          <p className="text-center leading-[1.4] text-[13px] vsm:text-[16px]">
            <span className="text-[#00FFD1]">Hypermove</span>{" "}
            <span className="text2 opacity-[0.5] text-white ">
              seamlessly integrates cutting-edge solutions like account
              abstraction & bridging the gap between web2 and web3 gaming.
            </span>
          </p>
          <li className="text3 mt-[10px] vsm:mt-[20px] text-center text-white leading-[1.3] text-[13px] vsm:text-[16px] opacity-[0.5] list-disc">
            Our mission is to elevate the gaming experience by introducing
            in-game NFTs, DeFi integration, AI agents, NPCs, and a diverse range
            of game modes.
          </li>
          <img
            className="hidden xl:block mt-[40px] h-fit w-fit animate-bounce"
            src={arrow}
            alt="arrow"
          />
        </div>

        <div className="mx-auto">
          <img className="img" src={img1} alt="game demo" />
        </div>
      </div>

      <img
        className="absolute z-[0] vsm:hidden xl:block top-[-120px] vsm:bottom-[-300px] right-[-50px] vsm:right-[0px]"
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
      <img className="absolute top-0 right-0" src={gradient2} alt="gradient" />
      <img className="absolute top-0 right-0" src={gradient3} alt="gradient" />
    </div>
  );
};

export default About;
