import React, { useState } from "react";
import img from "../assets/tournamentImg.svg";
import img2 from "../assets/tournamentImg2.png";
import tmBox1 from "../assets/tmBox1.svg";
import tmBox2 from "../assets/tmBox2.svg";
import tmBox3 from "../assets/tmBox2.svg";
import calendar from "../assets/calendar.svg";
import bg1 from "../assets/tmBg1.svg";
import bg2 from "../assets/tmBg2.svg";
import bg3 from "../assets/tmBg3.svg";
import light from "../assets/tmLight.png";

const Tournament = () => {
  const [state, setState] = useState(true);

  return (
    <div className="tournament min-h-screen mt-[100px] sm:mt-[150px] mb-[100px]">
      <h1 className="text-[18px] vsm:text-[25px] md:text-[35px] xmd:text-[48px] text-center font-[PilatExtended-Bold] leading-[1.1]">
        WE BRING THE WAVE OF <br /> ESPORTS TO WEB3
      </h1>
      <p className="w-[90%] sm:w-[80%] mt-[30px] mx-auto text-[10px] vsm:text-[14px] md:text-[18px] text-center">
        As esports continues to evolve and expand, Hypermove stands at the
        forefront of innovation in the web3 gaming space. <br /> By leveraging
        its esports and competitive ecosystem, Hypermove aims to usher in a new
        era of competitive gaming where fairness, skill, and integrity are
        paramount.
      </p>

      <div className="w-full hidden vsm:grid place-items-center">
        <img className="ml-[-80px]" src={img} alt="tournament" />
      </div>

      <div className="my-[50px] relative flex flex-col items-center gap-[40px] vsm:hidden">
        <div className="bg1 relative size-[282px]">
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={bg1}
            alt="bg"
          />

          <div className="relative h-full w-full flex flex-col justify-between p-[20px]">
            <p className="text-[14px]">
              CREATE YOUR <br />
              TEAM
            </p>
            <p className="w-[80%] ml-auto text-[10px] opacity-70 text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="bg2 relative size-[282px]">
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={bg2}
            alt="bg"
          />

          <div className="relative h-full w-full flex flex-col justify-between p-[20px]">
            <p className="text-[14px] text-right">
              ENJOY BIG <br /> PRIZES
            </p>
            <p className="w-[80%] text-[10px] opacity-70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>
        <div className="bg1 relative size-[282px]">
          <img
            className="absolute top-0 left-0 w-full h-full"
            src={bg1}
            alt="bg"
          />

          <div className="relative h-full w-full flex flex-col justify-between p-[20px]">
            <p className="text-[14px] uppercase">
              Top the <br /> leaderboard
            </p>
            <p className="w-[80%] ml-auto text-[10px] opacity-70 text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
        </div>

        <img className="absolute top-[480px] right-0" src={light} alt="light" />
      </div>

      <div className="flex flex-col items-center xl:flex-row xl:items-start">
        <div className="flex flex-col items-end">
          <h1 className="mr-[60px] font-[PilatExtended-Heavy] text-[16px] vsm:text-[20px] md:text-[32px]">
            LIVE
          </h1>
          <img
            className="mt-[-20px] vsm:mt-[-30px]"
            src={img2}
            alt="tournament trailer"
          />
        </div>

        <div className="flex-1  px-[20px] md:px-0">
          <h1 className="font-[PilatExtended-Bold] text-center xl:text-left text-[14px] vsm:text-[20px] sm:text-[24px] cursor-pointer">
            <span
              onClick={() => setState(true)}
              className={!state && "opacity-20"}
            >
              NEW EVENTS
            </span>{" "}
            <span className="opacity-20">&</span>{" "}
            <span
              onClick={() => setState(false)}
              className={state && "opacity-20"}
            >
              SCHEDULE
            </span>
          </h1>
          <div className="">
            {state ? (
              <div className="mt-[20px] pr-0 vsm:pr-[30px] w-full h-fit justify-center grid grid-cols-2 xl:grid-cols-4 gap-x-0 ">
                <Box1 />
                <Box1 />
                <Box2 />
                <Box1 />
                <Box3 />
                <Box1 />
                <Box3 />
                <Box3 />
              </div>
            ) : (
              <div className="mt-[20px] w-full h-fit">
                <img src={calendar} alt="calendar" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournament;

const Box1 = () => {
  return (
    <div className="box1 relative size-[148px] vsm:size-[172px]">
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={tmBox1}
        alt="event"
      />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="box2 relative size-[148px] vsm:size-[172px]">
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={tmBox2}
        alt="event"
      />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="box3 relative size-[148px] vsm:size-[172px]">
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={tmBox3}
        alt="event"
      />
    </div>
  );
};

const Box4 = () => {
  return (
    <div className="box1 relative size-[148px] vsm:size-[172px]">
      <img
        className="absolute top-0 left-0 w-full h-full"
        src={tmBox1}
        alt="event"
      />
    </div>
  );
};
