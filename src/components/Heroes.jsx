import React, { useRef } from "react";
import heroesImg from "../assets/heroes.png";
import btnbg from "../assets/heroes-btnbg.png";
import heroesBg from "../assets/heroesBg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Heroes = () => {
  const heroesRef = useRef();

  useGSAP(
    () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: heroesRef.current,
          start: "top 50%",
        },
      });

      const textElement = document.querySelector(".heroes .text1");
      const split = new SplitType(textElement, { types: "chars" });
      const textElement2 = document.querySelector(".heroes .text2");
      const split2 = new SplitType(textElement2, { types: "chars" });

      tl2.from(".img", {
        duration: 2,
        opacity: 0,
        y: 200,
      });
      tl2.from(split.chars, {
        opacity: 0,
        duration: 1.5,
      });
      tl2.from(split2.chars, {
        duration: 0.5,
        opacity: 0,
        stagger: 0.01,
      });
    },
    { scope: heroesRef }
  );

  return (
    <div
      ref={heroesRef}
      className="heroes relative mt-[50px] vsm:mt-[100px] pb-[60px] vsm:pb-[60px] md:pb-[30px]"
    >
      <h1 className="text-center text-outline text-[23px] vsm:text-[40px] md:text-[45px] xmd:text-[90px] text-transparent font-[PilatExtended-Heavy]">
        HEROES
      </h1>

      <img
        className="img relative z-[2] mt-[-30px] vsm:mt-[-50px] md:mt-[-130px] mx-auto"
        src={heroesImg}
        alt="heroes"
      />

      <div className="relative z-[3] mt-[-60px] vsm:mt-[-185px] md:pr-[60px] flex flex-col items-end">
        <button className="hidden relative ml-auto sm:flex justify-center items-center">
          <p className="absolute text-[12px] font-Montserrat font-[500] text-[#00FFD1]">
            View all Variants
          </p>
          <img src={btnbg} alt="button background" />
        </button>
        <h1 className="text1 text-center w-full md:text-end text-[23px] vsm:text-[32px] font-[PilatExtended-Heavy]">
          HYPER VARIANTS
        </h1>
        <p className="text2 w-[90%] sm:w-[80%] md:w-[65%] mx-auto md:mx-0 text-center text-[10px] vsm:text-[12px] sm:text-[14px]">
          In our world of Variants, every character brings unique abilities and
          playstyles to the table. Dive into our strategic role system, designed
          to enhance teamwork and reward tactical thinking for gratifying
          victories. Explore the depths of synergy and lead your team to
          triumph.
        </p>
      </div>

      <img
        className="absolute bottom-[-2px] right-0"
        src={heroesBg}
        alt="background"
      />

      <div className="heroes-shape1 absolute left-0 bottom-[-2px] w-[30%] h-[20px] bg-white dark:bg-[#000513] " />
      <div className="heroes-shape2 absolute right-0 bottom-[-2px] size-[100px] bg-white dark:bg-[#000513] " />
    </div>
  );
};

export default Heroes;
