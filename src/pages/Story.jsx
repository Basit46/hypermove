import React from "react";
import bg1 from "../assets/storyBg1.png";
import bg2 from "../assets/storyBg2.png";
import bg3 from "../assets/storyBg3.png";
import bg4 from "../assets/storyBg4.png";
import line from "../assets/storyLine.png";

const items = [
  "WHAT IS HYPERMOVE?",
  "How Did Hypermove Come to Be?",
  "Who Are the Hyper Variants?",
  "What is the Objective of Hypermove?",
  "What Are the Arenas Like?",
  "What Drives the Hyper Variants?",
  "How to describe Hypermove in a brief?",
];

const Story = () => {
  return (
    <div className="story-page h-fit mt-[100px] sm:mt-[150px] mb-[100px]">
      <h1 className="text-[24px] ml-[200px] font-[PilatExtended-DemiBold]">
        STORY
      </h1>
      <div className="w-full xl:flex">
        <div className="relative w-full xl:w-[60%] h-[500px]">
          <div className="h-fit ml-auto w-fit relative grid place-items-center">
            <img src={bg1} alt="background" />
            <p className="absolute top-[42%] text-[14px] font-medium font-Montserrat">
              The Variants?
            </p>
          </div>
          <div className="mt-[-230px] h-fit w-fit relative grid place-items-center">
            <img src={bg2} alt="background" />
            <p className="absolute w-[60%] top-[40%] text-[14px] font-medium font-Montserrat">
              The Hyper Variants are a team of five elite survivors who have
              risen from the ashes of the old world.
            </p>
          </div>
          <div className="mt-[-275px] ml-[70px] flex ">
            <div className="size-[44px] mt-[200px] bg-[#D9D9D9] rounded-full"></div>
            <div className="h-fit w-fit ml-[-120px] relative grid place-items-center">
              <img src={bg3} alt="background" />
              <p className="absolute w-[60%] top-[34%] text-[14px] font-medium font-Montserrat">
                Each character brings their unique skills and abilities to the
                battlefield, forming a formidable team capable of taking on any
                challenge. They are not just fighting for themselves but for the
                hope of rebuilding a better world. Their backgrounds are
                diverse, each with a story of loss, resilience, and the will to
                survive.
              </p>
            </div>
          </div>

          <img
            className="absolute bottom-0 left-0 z-[5]"
            src={line}
            alt="line"
          />
        </div>

        <div className="mt-[50px] px-[20px] md:px-0 xl:mt-0 flex-1 h-fit xl:h-[400px] flex flex-col  ju justify-center items-center">
          <div>
            {items.map((item, i) => (
              <div
                key={i}
                className="group mb-[10px] flex items-center gap-[10px] cursor-pointer"
              >
                <div className="hidden group-hover:block w-[17px] h-0 border-y-[0.5px] border-white"></div>
                <p className="question uppercase">{item}</p>
              </div>
            ))}
          </div>

          <img className="" src={bg4} alt="story" />
        </div>
      </div>
    </div>
  );
};

export default Story;
