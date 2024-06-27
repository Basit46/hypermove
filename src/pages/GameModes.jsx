import React from "react";
import gameModeImg1 from "../assets/gameModeImg1.png";
import gameModeImg2 from "../assets/gameModeImg2.png";
import gameModeImg3 from "../assets/gameModeImg3.png";

const GameModes = () => {
  return (
    <div className="game-page min-h-screen mt-[100px] sm:mt-[150px] mb-[300px] px-[20px] sm:px-[40px] xmd:px-[60px]">
      <h1 className="pr-[40px] text-[48px] font-[PilatExtended-Bold] text-end">
        GAME MODES
      </h1>
      <div className="mt-[-80px]">
        <div className="relative">
          <div className="box w-full h-[507px]">
            <img
              className="h-full w-full object-cover"
              src={gameModeImg1}
              alt="game mode"
            />
          </div>
          <div className="desc absolute z-[2] rounded-[20px] left-[30px] bottom-[-160px] w-[484px] h-[317px] p-[20px]">
            <h3 className="text-[18px] font-[PilatExtended-DemiBold] leading-[1.1]">
              5v5 Team <br /> Deathmatch Mode
            </h3>
            <p className="mt-[20px] text-[14px] opacity-70">
              Engage in high-intensity, team-based battles where strategic
              coordination and precise execution are essential. Two teams face
              off, aiming to eliminate their opponents within a designated
              timeframe to achieve victory.
            </p>
            <p className="mt-[10px] text-[14px] opacity-70">
              Continuous action is ensured through respawning, allowing players
              to swiftly rejoin the battle after elimination. Victorious teams
              are
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="box2 w-full h-[507px]">
            <img
              className="h-full w-full object-cover"
              src={gameModeImg3}
              alt="game mode"
            />
          </div>
          <div className="desc absolute z-[2] rounded-[20px] right-[30px] bottom-[-160px] w-[484px] h-[317px] p-[20px]">
            <h3 className="text-[18px] font-[PilatExtended-DemiBold] leading-[1.1] text-end">
              5v5 Team <br /> Deathmatch Mode
            </h3>
            <p className="mt-[20px] text-[14px] opacity-70 text-end">
              Engage in high-intensity, team-based battles where strategic
              coordination and precise execution are essential. Two teams face
              off, aiming to eliminate their opponents within a designated
              timeframe to achieve victory.
            </p>
            <p className="mt-[10px] text-[14px] opacity-70 text-end">
              Continuous action is ensured through respawning, allowing players
              to swiftly rejoin the battle after elimination. Victorious teams
              are
            </p>
          </div>
        </div>
        <div className="relative mt-[-10px]">
          <div className="box w-full h-[507px]">
            <img
              className="h-full w-full object-cover"
              src={gameModeImg2}
              alt="game mode"
            />
          </div>
          <div className="desc absolute rounded-[20px] left-[30px] bottom-[-160px]  w-[484px] h-[317px] p-[20px]">
            <h3 className="text-[18px] font-[PilatExtended-DemiBold] leading-[1.1]">
              5v5 Team <br /> Deathmatch Mode
            </h3>
            <p className="mt-[20px] text-[14px] opacity-70">
              Engage in high-intensity, team-based battles where strategic
              coordination and precise execution are essential. Two teams face
              off, aiming to eliminate their opponents within a designated
              timeframe to achieve victory.
            </p>
            <p className="mt-[10px] text-[14px] opacity-70">
              Continuous action is ensured through respawning, allowing players
              to swiftly rejoin the battle after elimination. Victorious teams
              are
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameModes;
