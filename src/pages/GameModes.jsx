import React from "react";
import gameModeImg1 from "../assets/gameModeImg1.png";
import gameModeImg2 from "../assets/gameModeImg2.png";
import gameModeImg3 from "../assets/gameModeImg3.png";
import AnimatedPage from "../components/AnimatedPage";

const GameModes = () => {
  return (
    <AnimatedPage>
      <div className="game-page min-h-screen mt-[100px] sm:mt-[150px] mb-[300px] px-[20px] sm:px-[40px] xmd:px-[60px]">
        <h1 className="xl:pr-[40px] text-[24px] sm:text-[30px] md:text-[40px] xmd:text-[48px] font-[PilatExtended-Bold] text-center xl:text-end">
          GAME MODES
        </h1>
        <div className="mt-[20px] xl:mt-[-80px]">
          <div className="relative">
            <div className="box w-full h-[301px] md:h-[507px]">
              <img
                className="h-full w-full object-cover"
                src={gameModeImg1}
                alt="game mode"
              />
            </div>
            <div className="desc absolute z-[2] rounded-[20px] left-1/2 -translate-x-1/2 sm:-translate-x-0 xl:left-[30px] bottom-[-160px] w-[99%] sm:w-[484px] h-fit sm:h-[317px] p-[20px]">
              <h3 className="text-[16px] sm:text-[18px] font-[PilatExtended-DemiBold] leading-[1.1]">
                5v5 Team <br /> Deathmatch Mode
              </h3>
              <p className="mt-[20px] text-[12px] sm:text-[14px] opacity-70">
                Engage in high-intensity, team-based battles where strategic
                coordination and precise execution are essential. Two teams face
                off, aiming to eliminate their opponents within a designated
                timeframe to achieve victory.
              </p>
              <p className="mt-[10px] text-[12px] sm:text-[14px] opacity-70">
                Continuous action is ensured through respawning, allowing
                players to swiftly rejoin the battle after elimination.
                Victorious teams are
              </p>
            </div>
          </div>

          <div className="relative my-[200px] sm:my-[20px] lg:my-0">
            <div className="box2 w-full h-[301px] md:h-[507px]">
              <img
                className="h-full w-full object-cover"
                src={gameModeImg3}
                alt="game mode"
              />
            </div>
            <div className="desc absolute z-[2] rounded-[20px] left-1/2 -translate-x-1/2 sm:-translate-x-0 xl:right-[30px] bottom-[-160px] w-[99%] sm:w-[484px] h-fit sm:h-[317px] p-[20px]">
              <h3 className="text-[16px] sm:text-[18px] font-[PilatExtended-DemiBold] leading-[1.1] sm:text-end">
                5v5 Team <br /> Deathmatch Mode
              </h3>
              <p className="mt-[20px] text-[12px] sm:text-[14px] opacity-70 sm:text-end">
                Engage in high-intensity, team-based battles where strategic
                coordination and precise execution are essential. Two teams face
                off, aiming to eliminate their opponents within a designated
                timeframe to achieve victory.
              </p>
              <p className="mt-[10px] text-[12px] sm:text-[14px] opacity-70 sm:text-end">
                Continuous action is ensured through respawning, allowing
                players to swiftly rejoin the battle after elimination.
                Victorious teams are
              </p>
            </div>
          </div>

          <div className="relative mt-[-10px]">
            <div className="box w-full h-[301px] sm:h-[507px]">
              <img
                className="h-full w-full object-cover"
                src={gameModeImg2}
                alt="game mode"
              />
            </div>
            <div className="desc absolute rounded-[20px] left-1/2 -translate-x-1/2 sm:-translate-x-0  xl:left-[30px] bottom-[-160px] w-[99%] sm:w-[484px] h-fit sm:h-[317px] p-[20px]">
              <h3 className="text-[16px] sm:text-[18px] font-[PilatExtended-DemiBold] leading-[1.1]">
                5v5 Team <br /> Deathmatch Mode
              </h3>
              <p className="mt-[20px] text-[12px] sm:text-[14px] opacity-70">
                Engage in high-intensity, team-based battles where strategic
                coordination and precise execution are essential. Two teams face
                off, aiming to eliminate their opponents within a designated
                timeframe to achieve victory.
              </p>
              <p className="mt-[10px] text-[12px] sm:text-[14px] opacity-70">
                Continuous action is ensured through respawning, allowing
                players to swiftly rejoin the battle after elimination.
                Victorious teams are
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default GameModes;
