import React from "react";
import coin1 from "../assets/coinImg1.png";
import coin2 from "../assets/coinImg2.png";
import coin3 from "../assets/coinImg3.png";
import partner1 from "../assets/partner1.svg";
import partner2 from "../assets/partner2.svg";

const AboutToken = () => {
  return (
    <div className="token-page mt-[200px] relative xl:min-h-[900px]">
      <div className="blur-bg  absolute left-0 top-0 w-[677.5px] h-[400px] xl;h-[850px] blur-[100px] rotate-[10deg] rounded-full"></div>
      <img
        className="absolute top-[150px] xl:top-0 left-0 xl:left-[20%]"
        src={coin1}
        alt="coin"
      />
      <img
        className="absolute top-[150px] xl:top-0 left-[54%]"
        src={coin2}
        alt="coin"
      />
      <img className="absolute top-[240px] left-[54%]" src={coin3} alt="coin" />

      <div>
        <p className="mt-[-100px] xl:ml-auto xl:mr-[60px] block xl:hidden w-fit relative text-outline text-transparent uppercase text-[90px] font-[PilatExtended-Heavy]">
          $hype
        </p>
      </div>

      <div className="blur-box relative xl:ml-auto xl:mr-[200px] w-full xl:w-[50%] h-fit xl:h-[200px] backdrop-blur-[50px] flex flex-col xl:flex-row px-[50px] sm:pl-[100px] xl:gap-[10px] py-[40px] xl:pt-[40px]">
        <ul className="list-disc list-inside text-[10px] vsm:text-[14px] font-[PilatExtended-Light]">
          <li>Staking & Operation</li>
          <li>Points to tokens</li>
          <li>Play-and-Earn Rewards</li>
          <li>Content Creator Incentives</li>
          <li>Community Treasury</li>
          <li>Governance & Voting</li>
        </ul>
        <ul className="list-disc list-inside text-[10px] vsm:text-[14px] font-[PilatExtended-Light]">
          <li>Tournament Access</li>
          <li>Platform Fees</li>
          <li>In-Game Asset Marketplace</li>
        </ul>
      </div>
      <div>
        <p className="hidden xl:ml-auto xl:mr-[60px] xl:block w-fit relative text-outline text-transparent uppercase text-[90px] font-[PilatExtended-Heavy]">
          $hype
        </p>
      </div>

      <div id="partners" className="mt-[250px] relative">
        <h1 className="text-center text-[12px] vsm:text-[24px]">PARTNERS</h1>
        <div className="mt-[30px] w-fit mx-auto">
          <img src={partner1} alt="partner" />
          <img className="vsm:ml-[-88px]" src={partner2} alt="partner" />
        </div>
      </div>
    </div>
  );
};

export default AboutToken;
