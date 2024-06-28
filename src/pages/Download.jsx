import React from "react";
import frame from "../assets/downBtnFrame.svg";
import downImg1 from "../assets/downImg1.png";
import downImg2 from "../assets/downImg2.jpg";
import downImg3 from "../assets/downImg3.png";
import arrow from "../assets/downloadArrow.png";

const Download = () => {
  return (
    <div className="page download-page">
      <h1 className="text-center text-[48px] font-[PilatExtended-Bold]">
        Download
      </h1>

      <div className="w-full relative px-[60px]">
        <div className="main relative mt-[40px] h-[587px] w-full">
          <img
            className="w-full h-full object-cover"
            src={downImg1}
            alt="download preview"
          />
        </div>

        <div className="absolute top-[25%] right-[-30px] flex flex-col ">
          <div className="sec1 h-[188px] w-[211px]">
            <img
              className="h-full w-full object-cover"
              src={downImg2}
              alt="download preview"
            />
          </div>
          <div className="sec2 mt-[-37px] h-[188px] w-[211px]">
            <img
              className="h-full w-full object-cover"
              src={downImg3}
              alt="download preview"
            />
          </div>
        </div>

        <img
          className="absolute left-[120px] top-[370px]"
          src={arrow}
          alt="arrow"
        />
      </div>

      <div className="mt-[70px] px-[60px] flex justify-between gap-[100px]">
        <div className="w-[50%]">
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

        <div className="flex-1 min-h-[200px] flex justify-between">
          <div>
            <h1 className="mb-[20px] text-[20px] opacity-70 font-[PilatExtended-Bold]">
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
            <p className="mt-[10px] text-[12px] opacity-70">Version 2.6</p>
          </div>

          <div className="">
            <h1 className="mb-[20px] text-[20px] opacity-70 font-[PilatExtended-Bold]">
              Coming soon
            </h1>

            <div className="w-fit flex flex-col gap-[10px]">
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
