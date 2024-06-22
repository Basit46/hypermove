import React from "react";
import bg1 from "../assets/tokenImg1.png";
import bg2 from "../assets/tokenImg2.png";
import bg3 from "../assets/tokenImg3.png";
import coin1 from "../assets/coinImg1.png";
import coin2 from "../assets/coinImg2.png";
import coin3 from "../assets/coinImg3.png";
import line from "../assets/token-line.png";

const Token = () => {
  return (
    <div className="token relative mt-[20px] mx-[20px] md:mx-[40px] xmd:mx-[60px]">
      <div className="flex">
        <div className="w-fit h-fit relative">
          <div className="token-box1 hidden xl:block bg-[#222324] dark:bg-[#5741b4]" />
          <div className="token-box2 hidden xl:block bg-[#222324] dark:bg-[#5741b4] absolute bottom-0 right-0" />

          <img
            className="absolute hidden xl:block top-1/2 -translate-y-1/2 right-[-100px]"
            src={coin1}
            alt="coin"
          />
          <h1 className="absolute xl:top-1/2 xl:-translate-y-1/2 xl:right-[-400px] xl:mt-[-20px] font-[PilatExtended-Heavy] text-[64px] leading-none uppercase">
            Holding <br /> Token
          </h1>
        </div>

        <h1 className="relative ml-[50px] mt-[30px] uppercase leading-none text-outline text-[40px] xmd:text-[90px] text-transparent font-[PilatExtended-Heavy]">
          $hype <br /> token
          <img
            className="absolute hidden xl:block top-[60px] right-[90px]"
            src={coin2}
            alt="coin"
          />
        </h1>

        <p className="hidden xl:block ml-[-200px] w-full mt-[70px] text-right text-[14px] opacity-50">
          $HYPE serves as a unified token for the entire <br /> Hypermove
          ecosystem, enabling seamless participation <br /> in daily missions,
          tournaments, NFT staking, and <br /> purchases with a single currency.
        </p>
      </div>

      <div className="hidden absolute right-0 bottom-0 xl:flex gap-[4px] items-end">
        <div className="token-box">
          <img
            className="absolute left-0 top-[-115px]"
            src={line}
            alt="border"
          />
          <img className="absolute left-0 top-[-30px]" src={coin3} alt="coin" />
          <img className="w-full" src={bg1} alt="Token bg" />
          <div className="">
            <div className="" />
            <h3>Stake $HYPE:</h3>
            <p>
              Secure long term benefits by staking your $HYPE tokens,
              facilitating game data processing and transactions.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="token-box">
            <img className="w-full" src={bg2} alt="Token bg" />
            <div>
              <div className="ml-auto mt-[-30px]" />
              <h3 className="text-end">NFT Marketplace:</h3>
              <p className="text-end">
                Use $HYPE tokens as the primary currency for purchasing,
                selling, and trading in-game assets like skins, characters,
                equipment, and virtual land.
              </p>
            </div>
          </div>
          <div className="token-box mt-[-30px]">
            <img className="w-full" src={bg3} alt="Token bg" />
            <div className="">
              <div className="ml-auto" />
              <h3 className="text-end">Tournament and Esports</h3>
              <p className="text-end">
                Gain access to exclusive tournaments and special events on the
                Hypermove platform with $HYPE tokens.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="block xl:hidden mt-[50px]">
        <p className="w-full text-center text-[14px] opacity-50">
          $HYPE serves as a unified token for the entire <br /> Hypermove
          ecosystem, enabling seamless participation <br /> in daily missions,
          tournaments, NFT staking, and <br /> purchases with a single currency.
        </p>

        <div className="mt-[40px] flex flex-wrap justify-center gap-[20px] items-center">
          <div className="token-box">
            <img className="w-full" src={bg1} alt="Token bg" />
            <div className="">
              <div className="" />
              <h3>Stake $HYPE:</h3>
              <p>
                Secure long term benefits by staking your $HYPE tokens,
                facilitating game data processing and transactions.
              </p>
            </div>
          </div>
          <div className="token-box">
            <img className="w-full" src={bg2} alt="Token bg" />
            <div>
              <div className="ml-auto mt-[-30px]" />
              <h3 className="text-end">NFT Marketplace:</h3>
              <p className="text-end">
                Use $HYPE tokens as the primary currency for purchasing,
                selling, and trading in-game assets like skins, characters,
                equipment, and virtual land.
              </p>
            </div>
          </div>
          <div className="token-box mt-[-30px]">
            <img className="w-full" src={bg3} alt="Token bg" />
            <div className="">
              <div className="ml-auto" />
              <h3 className="text-end">Tournament and Esports</h3>
              <p className="text-end">
                Gain access to exclusive tournaments and special events on the
                Hypermove platform with $HYPE tokens.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
