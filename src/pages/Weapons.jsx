import React, { useEffect, useState } from "react";
import weaponBg from "../assets/weapon-box.png";
import weaponVar from "../assets/weaponVar.png";
import weaponBg2 from "../assets/weapon-box2.png";
import line from "../assets/variantLine.svg";
import bg from "../assets/variantBg.png";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import arrow1 from "../assets/feat-arrow1.png";
import arrow2 from "../assets/feat-arrow2.svg";
import AnimatedPage from "../components/AnimatedPage";

const Weapons = () => {
  const [state, setState] = useState(true);

  const images = [star1, star2, star3]; // Define the image sequence
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  // Helper function to get the image source based on index and offset
  const getImageSrc = (offset) => {
    return images[(currentImageIndex + offset) % images.length];
  };

  return (
    <AnimatedPage>
      <div className="weapon-page min-h-screen mt-[100px] sm:mt-[150px] mb-[100px]">
        <h1 className="text-center text-[24px] sm:text-[35px] xmd:text-[48px] font-[PilatExtended-Bold] cursor-pointer">
          <span
            onClick={() => setState(false)}
            className={state && "opacity-20"}
          >
            Variants
          </span>{" "}
          <span className="opacity-20">&</span>{" "}
          <span
            onClick={() => setState(true)}
            className={!state && "opacity-20"}
          >
            Weapons
          </span>
        </h1>

        {state ? (
          <div className="mt-[30px] sm:mt-[80px] flex flex-wrap gap-[30px] justify-center">
            <LeftBox />
            <MiddleBox />
            <MiddleBox />
            <RightBox />
            <LeftBox />
            <MiddleBox />
            <MiddleBox />
            <RightBox />
          </div>
        ) : (
          <div className="mt-[30px] sm:mt-[80px] relative min-h-[400px] flex flex-col">
            <div className="flex-1 relative z-[2]">
              <div className="px-[20px] xmd:px-[60px] flex justify-center">
                <img
                  className="opacity-20"
                  src={getImageSrc(2)}
                  alt="super hero"
                />
                <img
                  className="mx-[-200px] sm:mx-[-300px] xmd:mx-[-600px] xl:mx-[-800px] scale-[1.5]"
                  src={getImageSrc(0)}
                  alt="super hero"
                />
                <img
                  className="opacity-20"
                  src={getImageSrc(1)}
                  alt="super hero"
                />
              </div>
              <div className="absolute bottom-0 pt-0 md:pt-[40px] px-[0px] xmd:px-[60px] w-full h-full flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <img src={arrow1} alt="arrow" />
                  <img src={arrow2} alt="arrow" />
                </div>

                <div className="hidden lg:flex justify-between items-end">
                  <div className="w-[30%] uppercase">
                    <div>
                      <h3 className="text-[18px]">ROLE</h3>
                      <p className="bg-hero-gradient clip-text text-[24px] font-[PilatExtended-Heavy]">
                        TECHSAVANT
                      </p>
                    </div>

                    <div className="my-[15px]">
                      <h3 className="text-[18px] font-[PilatExtended-Bold]">
                        Jetpack
                      </h3>
                      <p className="text-[14px] opacity-70">
                        Jets on his back allows him to fly for certain
                        distances.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[18px] font-[PilatExtended-Bold]">
                        RECON SCAN
                      </h3>
                      <p className="text-[14px] opacity-70">
                        Triggers two scanning waves, releasing pulses that
                        penetrate walls and briefly highlight enemies.
                      </p>
                    </div>
                  </div>

                  <div className="hero-blur w-[35%] h-[377px] backdrop-blur-[20px] "></div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                className="absolute left-0 bottom-[-4px] sm:bottom-[-6px] w-full"
                src={bg}
                alt="gradient"
              />
              <div className="absolute bottom-[6px] sm:bottom-[20px] bg-[#00FFD1] left-1/2 -translate-x-1/2 h-[2px] w-[15%]" />
              <img className="" src={line} alt="line" />
            </div>

            <div className="mt-[50px] px-[20px] xmd:px-[40px] flex lg:hidden flex-col gap-[40px] justify-between items-end">
              <div className="uppercase">
                <div>
                  <h3 className="text-[18px]">ROLE</h3>
                  <p className="bg-hero-gradient clip-text text-[24px] font-[PilatExtended-Heavy]">
                    TECHSAVANT
                  </p>
                </div>

                <div className="my-[15px]">
                  <h3 className="text-[18px] font-[PilatExtended-Bold]">
                    Jetpack
                  </h3>
                  <p className="text-[14px] opacity-70">
                    Jets on his back allows him to fly for certain distances.
                  </p>
                </div>

                <div>
                  <h3 className="text-[18px] font-[PilatExtended-Bold]">
                    RECON SCAN
                  </h3>
                  <p className="text-[14px] opacity-70">
                    Triggers two scanning waves, releasing pulses that penetrate
                    walls and briefly highlight enemies.
                  </p>
                </div>
              </div>

              <div className="w-full">
                <h1 className="text-[12px] vsm:text-[16px] font-medium pl-[40px]">
                  TRAILER
                </h1>
                <div className="mt-[-16px] hero-blur w-full h-[377px] backdrop-blur-[20px]"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedPage>
  );
};

export default Weapons;

const LeftBox = () => {
  return (
    <div className="w-fit">
      <p className="relative z-[3] ml-[100px] uppercase text-[10px] font-medium opacity-50">
        Meelee
      </p>
      <div className="left-box mt-[-13px] relative size-[282px]">
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={weaponBg}
          alt="weapon line"
        />
        <div className="relative h-full w-full grid place-items-center">
          <img src={weaponVar} alt="weapon" />
          <p className="absolute bottom-[10px] right-[10px] uppercase font-[PilatExtended-Bold] text-[14px]">
            Assault Rifle
          </p>
        </div>
      </div>
    </div>
  );
};

const MiddleBox = () => {
  return (
    <div className="w-fit">
      <p className="relative z-[3] ml-[100px] uppercase text-[10px] font-medium opacity-50">
        single weapon
      </p>
      <div className="middle-box mt-[-13px] relative size-[282px]">
        <div className="relative h-full w-full grid place-items-center">
          <img src={weaponVar} alt="weapon" />
          <p className="absolute bottom-[10px] left-1/2 -translate-x-1/2 uppercase whitespace-nowrap font-[PilatExtended-Bold] text-[14px]">
            Assault Rifle
          </p>
        </div>
      </div>
    </div>
  );
};

const RightBox = () => {
  return (
    <div className="w-fit relative">
      <p className="relative z-[3] ml-[120px] uppercase text-[10px] font-medium opacity-50">
        Meelee
      </p>
      <div className="right-box mt-[-13px] relative size-[282px]">
        <img
          className="absolute top-0 left-0 w-full h-full"
          src={weaponBg2}
          alt="weapon line"
        />
        <div className="relative h-full w-full grid place-items-center">
          <img src={weaponVar} alt="weapon" />
        </div>
      </div>
      <p className="absolute bottom-[10px] right-[10px] uppercase font-[PilatExtended-Bold] text-[14px]">
        Assault Rifle
      </p>
    </div>
  );
};
