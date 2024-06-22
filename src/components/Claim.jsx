import React from "react";
import textImg from "../assets/claim-text.svg";
import textImg2 from "../assets/claim-text2.svg";
import bg from "../assets/claim-btnbg.png";

export const BottomClaim = ({ text }) => {
  return (
    <div className="w-fit flex flex-col cursor-pointeritems-end gap-[10px]">
      <div className="claim bottom-claim cursor-pointer relative bg-[#010001]/50 group">
        <p className="pl-[10px] pt-[10px] group-hover:opacity-100 uppercase font-[PilatExtended-DemiBold] text-[20px] font-[600] opacity-60">
          {text}
        </p>
        <img
          className="absolute bottom-[5px] right-[5px]"
          src={textImg}
          alt="text"
        />
      </div>
      <div className="flex justify-center items-center">
        <img src={bg} alt="bg" />
        <p className="absolute">CLAIM</p>
      </div>
    </div>
  );
};

export const TopClaim = ({ text }) => {
  return (
    <div className="ml-[-70px] mt-[-40px] w-fit flex flex-col cursor-pointer gap-[10px]">
      <div className="claim top-claim cursor-pointer relative bg-[#010001]/50 group">
        <p className="absolute bottom-[10px] right-[10px] group-hover:opacity-100 uppercase font-[PilatExtended-DemiBold] text-[20px] font-[600] opacity-60">
          {text}
        </p>
        <img
          className="absolute left-[5px] top-[5px]"
          src={textImg2}
          alt="text"
        />
      </div>
      <div className="ml-[25px] flex justify-center items-center">
        <img src={bg} alt="bg" />
        <p className="absolute">CLAIM</p>
      </div>
    </div>
  );
};
