import React from "react";
import base from "../assets/roadmapBase.png";
import gradient1 from "../assets/roadmapGradient1.png";
import gradient2 from "../assets/roadmapGradient2.png";

const Roadmap = () => {
  return (
    <div className="roadmap mt-[50px]">
      <h1 className="text-center uppercase text-[24px]">Roadmap</h1>

      <div className="relative px-[10px] mt-[40px] flex justify-between ">
        <div className="item">
          <img
            className="absolute left-[-20%] bottom-0"
            src={gradient1}
            alt="gradient"
          />
          <div className="top">
            <div className="w-[11px]" />
            <p className="text-[14px]">2022</p>
          </div>
          <div className="bottom">
            <div>
              <div className="h-[20px]" />
            </div>
            <ul>
              <li>Research on Web3 gaming</li>
              <li>Idea and Conceptualisation</li>
              <li>Team formation</li>
              <li>FPS game designing</li>
              <li>Launch social handles</li>
              <li>Enhanced game graphics and UX</li>
              <li>Release tokenomics</li>
            </ul>
          </div>
        </div>

        <div className="mt-[60px] item">
          <img
            className="absolute left-[-20%] bottom-[-30%]"
            src={gradient2}
            alt="gradient"
          />
          <div className="top">
            <div className="w-[41px]" />
            <p className="text-[14px] z-[2]">2023</p>
          </div>
          <div className="bottom">
            <div>
              <div className="h-[20px]" />
            </div>
            <ul>
              <li>Onboarding advisors</li>
              <li>Multichain deployment</li>
              <li>Securing grants</li>
              <li>Custom weapons designing</li>
              <li>Collaboration with GameFi projects</li>
              <li>Initiate waitlist for game launch</li>
              <li>Cultivate relationship with gaming guilds</li>
            </ul>
          </div>
        </div>

        <div className="item opacity-50">
          <div className="flex gap-[10px]">
            <div className="top">
              <div className="w-[68px]" />
              <p className="text-[14px] z-[2]">2024</p>
            </div>
            <div className="size-[34px] bg-[#8062FF] rounded-full grid place-items-center">
              <p className="text-[10px]">H1</p>
            </div>
          </div>
          <div className="bottom">
            <div>
              <div className="h-[20px]" />
            </div>
            <ul>
              <li>Onboarding advisors</li>
              <li>Multichain deployment</li>
              <li>Securing grants</li>
              <li>Custom weapons designing</li>
              <li>Collaboration with GameFi projects</li>
              <li>Initiate waitlist for game launch</li>
              <li>Cultivate relationship with gaming guilds</li>
            </ul>
          </div>
        </div>

        <div className="mt-[60px] item opacity-50">
          <div className="flex gap-[10px]">
            <div className="top">
              <div className="w-full" />
              <p className="text-[14px] z-[2]">2024</p>
            </div>
            <div className="size-[34px] bg-[#8062FF] rounded-full grid place-items-center">
              <p className="text-[10px]">H1</p>
            </div>
          </div>
          <div className="bottom">
            <div style={{ height: "108px" }}>
              <div className="h-[20px]" />
            </div>
            <ul>
              <li>
                Expand ecosystem by launching <br /> more games
              </li>
              <li>Execute Token Generation Event (TGE)</li>
              <li>Conduct Initial DEX Offering (IDO)</li>
              <li>Achieve user milestone of 1M+</li>
              <li>New roadmap launch</li>
            </ul>
          </div>
        </div>

        <img
          className="absolute bottom-[-100px] left-0"
          src={base}
          alt="base"
        />
      </div>
    </div>
  );
};

export default Roadmap;
