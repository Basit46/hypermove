import React from "react";
import img1 from "../assets/featImg1.png";
import img2 from "../assets/featImg2.png";
import img3 from "../assets/featImg3.png";
import arrow1 from "../assets/feat-arrow1.png";
import arrow2 from "../assets/feat-arrow2.svg";

const Features = () => {
  return (
    <div className="px-[30px]">
      <div className="relative mt-[-140px] w-fit ml-auto">
        <h1 className="ml-auto text-outline text-[70px] text-transparent font-[PilatExtended-Heavy]">
          FEATURES
        </h1>
        <h3 className="mt-[-25px] text-[32px] clip-text font-[PilatExtended-Heavy] bg-custom-gradient2">
          WHAT WE OFFER?
        </h3>
      </div>

      <div className="relative mt-[80px] flex items-center justify-center">
        <button className="absolute z-[20] left-[-70px] top-1/2 -translate-y-1/2">
          <img src={arrow1} alt="arrow" />
        </button>

        <div>
          <img src={img1} alt="game feature" />
        </div>
        <div className="scale-[1.2]">
          <img src={img2} alt="game feature" />
        </div>
        <div>
          <img src={img3} alt="game feature" />
        </div>

        <button className="absolute right-[-70px] top-1/2 -translate-y-1/2">
          <img src={arrow2} alt="arrow" />
        </button>
      </div>

      <p className="mt-[20px] text-[12px] text-center">
        Enter a dystopian future where factions fight for control. Join skilled{" "}
        <br /> heroes in epic team-based combat.
      </p>
    </div>
  );
};

export default Features;
