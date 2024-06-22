import React from "react";
import heroesImg from "../assets/heroes.png";
import btnbg from "../assets/heroes-btnbg.png";
import heroesBg from "../assets/heroesBg.png";

const Heroes = () => {
  return (
    <div className="heroes relative mt-[100px] pb-[30px]">
      <h1 className="text-center text-outline text-[90px] text-transparent font-[PilatExtended-Heavy]">
        HEROES
      </h1>

      <img
        className="relative z-[2] mt-[-130px] mx-auto"
        src={heroesImg}
        alt="heroes"
      />

      <div className="relative z-[3] mt-[-185px] pr-[60px] flex flex-col items-end">
        <button className="relative ml-auto flex justify-center items-center">
          <p className="absolute text-[12px] font-Montserrat font-[500] text-[#00FFD1]">
            View all Variants
          </p>
          <img src={btnbg} alt="button background" />
        </button>
        <h1 className="text-end text-[32px] font-[PilatExtended-Heavy]">
          HYPER VARIANTS
        </h1>
        <p className="w-[65%] text-center text-[14px]">
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

      <div className="heroes-shape1 absolute left-0 bottom-[-2px] w-[30%] h-[20px] bg-[#000513] " />
      <div className="heroes-shape2 absolute right-0 bottom-[-2px] size-[100px] bg-[#000513] " />
    </div>
  );
};

export default Heroes;
