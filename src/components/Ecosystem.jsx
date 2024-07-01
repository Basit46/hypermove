import React, { useRef } from "react";
import { BottomClaim, TopClaim } from "./Claim";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Ecosystem = () => {
  const ecosystemRef = useRef();

  useGSAP(
    () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ecosystemRef.current,
          start: "top 50%",
        },
      });

      tl2.from(".text1", {
        opacity: 0,
      });
      tl2.from(".hero-slide", {
        opacity: 0,
      });
      tl2.from(".hero-slide2", {
        opacity: 0,
      });
    },
    { scope: ecosystemRef }
  );
  return (
    <div ref={ecosystemRef} className="mt-[100px] ecosystem">
      <h1 className="text1 uppercase leading-none text-center text-[25px] md:text-[30px] xmd:text-[49px]">
        contributing to <br />
        ecosystem
      </h1>

      <div className="mt-[50px] w-full overflow-x-hidden h-fit">
        <div className="flex hero-slide">
          <div className="relative w-fit h-fit flex gap-[5px]">
            <BottomClaim text="Play for 2 hours" />
            <TopClaim text="First Kill" />
            <BottomClaim text="Headshot Kills" />
            <TopClaim text="Win a match" />
            <BottomClaim text="Win 10 matches" />
          </div>
          <div className="relative w-fit h-fit flex gap-[5px]">
            <BottomClaim text="Play for 2 hours" />
            <TopClaim text="First Kill" />
            <BottomClaim text="Headshot Kills" />
            <TopClaim text="Win a match" />
            <BottomClaim text="Win 10 matches" />
          </div>
        </div>
      </div>

      <div className=" mt-[20px] w-full overflow-x-hidden">
        <div className="flex hero-slide2">
          <div className="relative w-fit h-fit flex gap-[5px]">
            <BottomClaim text="Play for 2 hours" />
            <TopClaim text="First Kill" />
            <BottomClaim text="Headshot Kills" />
            <TopClaim text="Win a match" />
            <BottomClaim text="Win 10 matches" />
          </div>
          <div className="relative w-fit h-fit flex gap-[5px]">
            <BottomClaim text="Play for 2 hours" />
            <TopClaim text="First Kill" />
            <BottomClaim text="Headshot Kills" />
            <TopClaim text="Win a match" />
            <BottomClaim text="Win 10 matches" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;
