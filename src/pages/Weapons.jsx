import React from "react";
import weaponBg from "../assets/weapon-box.png";
import weaponVar from "../assets/weaponVar.png";
import weaponBg2 from "../assets/weapon-box2.png";

const Weapons = () => {
  return (
    <div className="page weapon-page">
      <h1 className="text-center text-[24px] sm:text-[35px] xmd:text-[48px] font-[PilatExtended-Bold]">
        <span className="opacity-20">Variants &</span>{" "}
        <span className="opacity-100">Weapons</span>
      </h1>

      <div className="mt-[30px] sm:mt-[80px] flex flex-wrap gap-[30px] justify-center">
        <LeftBox />
        <MiddleBox />
        <MiddleBox />
        <RightBox />
        <LeftBox />
        <MiddleBox />
        <MiddleBox />
        <RightBox />
      </div>
    </div>
  );
};

export default Weapons;

const LeftBox = () => {
  return (
    <div className="w-fit">
      <p className="relative z-[3] ml-[100px] uppercase text-[10px] font-medium opacity-50">
        Meelee
      </p>
      <div className="left-box mt-[-13px] relative size-[282px]">
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={weaponBg}
          alt="weapon line"
        />
        <div className="relative h-full w-full grid place-items-center">
          <img src={weaponVar} alt="weapon" />
          <p className="absolute bottom-[10px] right-[10px] uppercase font-[PilatExtended-Bold] text-[14px]">
            Assault Rifle
          </p>
        </div>
      </div>
    </div>
  );
};

const MiddleBox = () => {
  return (
    <div className="w-fit">
      <p className="relative z-[3] ml-[100px] uppercase text-[10px] font-medium opacity-50">
        single weapon
      </p>
      <div className="middle-box mt-[-13px] relative size-[282px]">
        <div className="relative h-full w-full grid place-items-center">
          <img src={weaponVar} alt="weapon" />
          <p className="absolute bottom-[10px] left-1/2 -translate-x-1/2 uppercase whitespace-nowrap font-[PilatExtended-Bold] text-[14px]">
            Assault Rifle
          </p>
        </div>
      </div>
    </div>
  );
};

const RightBox = () => {
  return (
    <div className="w-fit relative">
      <p className="relative z-[3] ml-[120px] uppercase text-[10px] font-medium opacity-50">
        Meelee
      </p>
      <div className="right-box mt-[-13px] relative size-[282px]">
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={weaponBg2}
          alt="weapon line"
        />
        <div className="relative h-full w-full grid place-items-center">
          <img src={weaponVar} alt="weapon" />
        </div>
      </div>
      <p className="absolute bottom-[10px] right-[10px] uppercase font-[PilatExtended-Bold] text-[14px]">
        Assault Rifle
      </p>
    </div>
  );
};
