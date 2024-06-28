import React, { useState } from "react";
import frame from "../assets/downBtnFrame.svg";
import downImg1 from "../assets/downImg1.png";
import downImg2 from "../assets/downImg2.jpg";
import downImg3 from "../assets/downImg3.png";
import arrow from "../assets/downloadArrow.png";

const Download = () => {
  const list = [downImg1, downImg2, downImg3];
  const [currImg, setCurrImg] = useState(0);

  const handleNext = () => {
    if (currImg >= list.length - 1) {
      setCurrImg(0);
    } else {
      setCurrImg((prev) => prev + 1);
    }
  };

  return (
    <div className="page download-page">
      <h1 className="text-center text-[24px] vsm:text-[48px] font-[PilatExtended-Bold] uppercase">
        Download
      </h1>

      <div className="hidden lg:block w-full relative px-[60px]">
        <div className="main relative mt-[40px] h-[587px] w-full">
          <img
            className="w-full h-full object-cover"
            src={list[currImg]}
            alt="download preview"
          />
        </div>

        <div className="absolute top-[25%] right-[-30px] flex flex-col ">
          <div className="sec1 h-[188px] w-[211px]">
            <img
              className="h-full w-full object-cover"
              src={list[(currImg + 1) % 3]}
              alt="download preview"
            />
          </div>
          <div className="sec2 mt-[-37px] h-[188px] w-[211px]">
            <img
              className="h-full w-full object-cover"
              src={list[(currImg + 2) % 3]}
              alt="download preview"
            />
          </div>
        </div>

        <img
          onClick={handleNext}
          className="absolute left-[120px] top-[370px]"
          src={arrow}
          alt="arrow"
        />
      </div>

      {/* Responsive */}
      <div className="block lg:hidden w-full">
        <div className="relative">
          <div className="res w-full h-[316px]">
            <img
              className="w-full h-full object-cover"
              src={list[currImg]}
              alt="download preview"
            />
          </div>

          <img
            onClick={handleNext}
            className="absolute left-[-70px] bottom-[0px]"
            src={arrow}
            alt="arrow"
          />
        </div>

        <div className="mt-[20px] flex justify-center gap-[10px]">
          <div
            className={`${
              currImg != 0 && "bg-opacity-20"
            } w-[67px] h-[3px] bg-white`}
          />
          <div
            className={`${
              currImg != 1 && "bg-opacity-20"
            } w-[67px] h-[3px] bg-white`}
          />
          <div
            className={`${
              currImg != 2 && "bg-opacity-20"
            } w-[67px] h-[3px] bg-white`}
          />
        </div>
      </div>

      <div className="mt-[70px] lg:px-[60px] flex flex-col lg:flex-row justify-between gap-[50px] sm:gap-[100px]">
        <div className="w-full md:w-[50%]">
          <h1 className="text-[20px] font-[PilatExtended-DemiBold]">
            About Game
          </h1>
          <p className="mt-[10px] opacity-70 font-Montserrat leading-[28px]">
            Welcome to the world’s most unhinged battle royale! Slash, bash, and
            shoot your way through an intense 150-player melee. Earn loot, trade
            items, and maybe, just maybe, you’ll make it to the top. Just don’t
            look down once you do — what you left behind ain’t pretty. <br />{" "}
            We’re taking battle royales to a whole new level thanks to our
            genre-defying story missions! <br /> Off The Grid features an
            immersive 60-hour narrative campaign, which you’ll take part in as
            the battle royale rages on around you. Take on jobs for the video
            game companies, scour Teardrop Island for its secrets, and help
            Cobra find the missing piece of his past...
          </p>
        </div>

        <div className="flex-1 flex flex-col items-center sm:items-start gap-[30px] sm:gap-0 sm:flex-row justify-between">
          <div>
            <h1 className="mb-[20px] text-center sm:text-left text-[20px] opacity-70 font-[PilatExtended-Bold]">
              Download
            </h1>

            <button className="relative hover:bg-download-btn-gradient w-[161px] h-[54px] text-[16px] font-[600] font-Montserrat">
              <img
                className="absolute top-0 left-0 w-full h-full"
                src={frame}
                alt="frame"
              />
              Windows
            </button>
            <p className="mt-[10px] text-center sm:text-left text-[12px] opacity-70">
              Version 2.6
            </p>
          </div>

          <div className="">
            <h1 className="mb-[20px] text-center sm:text-left text-[20px] opacity-70 font-[PilatExtended-Bold]">
              Coming soon
            </h1>

            <div className="w-fit flex flex-wrap sm:flex-nowrap justify-center sm:justify-start sm:flex-col gap-[10px]">
              <button className="relative hover:bg-download-btn-gradient w-[161px] h-[54px] text-[16px] font-[600] font-Montserrat">
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  src={frame}
                  alt="frame"
                />
                Mac OS
              </button>
              <button className="relative hover:bg-download-btn-gradient w-[161px] h-[54px] text-[16px] font-[600] font-Montserrat">
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  src={frame}
                  alt="frame"
                />
                IOS
              </button>
              <button className="relative hover:bg-download-btn-gradient w-[161px] h-[54px] text-[16px] font-[600] font-Montserrat">
                <img
                  className="absolute top-0 left-0 w-full h-full"
                  src={frame}
                  alt="frame"
                />
                Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
