import React from "react";
import img1 from "../assets/team1.jpg";
import img2 from "../assets/team2.png";
import img3 from "../assets/team3.png";
import img4 from "../assets/team4.jpg";
import img5 from "../assets/team5.png";
import img6 from "../assets/team6.png";
import img7 from "../assets/team7.png";
import img8 from "../assets/team8.png";
import teamEllipse from "../assets/teamEllipse.png";

const Team = () => {
  return (
    <div id="team" className="team mt-[100px] min-h-[50vh]">
      <h1 className="text-center text-[12px] vsm:text-[24px] uppercase">
        The Team Behind the Scenes
      </h1>

      <div className="relative w-fit mt-[40px] flex mx-auto">
        <img
          className="absolute top-[-120px] left-1/2 -translate-x-1/2"
          src={teamEllipse}
          alt="ellipse"
        />

        <div className="team1 size-[24vw] vsm:size-[20vw] grid place-items-center p-[10px] md:p-[20px]">
          <div className="team1 w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={img1}
              alt="member"
            />
          </div>
        </div>

        <div className="team1 mt-[20px] sm:mt-[70px] size-[24vw] vsm:size-[20vw] grid place-items-center p-[10px] md:p-[20px]">
          <div className="team1 w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={img2}
              alt="member"
            />
          </div>
        </div>

        <div className="team2 mt-[20px] sm:mt-[70px] size-[24vw] vsm:size-[20vw] grid place-items-center p-[10px] md:p-[20px]">
          <div className="team2 w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={img3}
              alt="member"
            />
          </div>
        </div>

        <div className="team2 size-[24vw] vsm:size-[20vw] grid place-items-center p-[10px] md:p-[20px]">
          <div className="team2 w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={img4}
              alt="member"
            />
          </div>
        </div>
      </div>

      <div className="mt-[50px] flex items-center justify-center gap-[10px] sm;gap-[30px]">
        <h1 className="text-center text-[10px] vsm:text-[16px] uppercase">
          Advisors
        </h1>

        <div className="flex">
          <div className="team1 size-[60px] md:size-[136px] grid place-items-center p-[10px] md:p-[8px]">
            <div className="team1 w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={img5}
                alt="member"
              />
            </div>
          </div>
          <div className="team1 size-[60px] md:size-[136px] grid place-items-center p-[10px] md:p-[8px]">
            <div className="team1 w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={img6}
                alt="member"
              />
            </div>
          </div>
          <div className="team1 size-[60px] md:size-[136px] grid place-items-center p-[10px] md:p-[8px]">
            <div className="team1 w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={img7}
                alt="member"
              />
            </div>
          </div>
          <div className="team1 size-[60px] md:size-[136px] grid place-items-center p-[10px] md:p-[8px]">
            <div className="team1 w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={img8}
                alt="member"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
