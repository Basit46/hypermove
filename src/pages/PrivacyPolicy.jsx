import React from "react";
import line from "../assets/blogFrame.png";
import gradient from "../assets/blogGradient.png";
import AnimatedPage from "../components/AnimatedPage";

const PrivacyPolicy = () => {
  return (
    <AnimatedPage>
      <div className="min-h-screen mt-[100px] sm:mt-[150px] mb-[100px]">
        <div className="px-[20px]">
          <p className="uppercase font-[600] text-[24px] sm:text-[32px] text-center">
            Privacy policies
          </p>
          <p className="uppercase text-[10px] vsm:text-[14px] text-center">
            Discover the latest in crypto and play-to-earn gaming
          </p>
        </div>

        <div className="relative mt-[30px] min-h-[50vh] flex flex-col">
          <div className="">
            <img className="w-full" src={line} alt="line" />
          </div>
          <div className="flex-1">
            <div className="relative z-[2] mt-[30px] px-[20px] sm:px-[60px]">
              <h1 className="text-[24px] sm:text-[30px] xmd:text-[40px] leading-[1.2] font-Montserrat font-[500] sm:font-bold sm:text-center">
                Lorem Ipsum is simply dummy text of the printing.
              </h1>
              <p className="mt-[15px] text-[14px] vsm:text-[18px] vsm:font-[300] font-Montserrat opacity-50 vsm:opacity-70">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.Lorem
                Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the relea Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </div>
          </div>

          <img
            className="absolute top-[6px] sm:top-[17px] left-0 w-full"
            src={gradient}
            alt="gradient"
          />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default PrivacyPolicy;
