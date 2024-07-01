import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const CoverPage = () => {
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(".text", { opacity: 0, delay: 1 });
      gsap.to(".cover", { height: 0, stagger: 0.2, duration: 1, delay: 1 });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="fixed z-[200] top-0 left-0 w-full h-screen flex"
    >
      <div className="cover w-[20%] h-full bg-[#000513]" />
      <div className="cover w-[20%] h-full bg-[#000513]" />
      <div className="cover w-[20%] h-full bg-[#000513]" />
      <div className="cover w-[20%] h-full bg-[#000513]" />
      <div className="cover w-[20%] h-full bg-[#000513]" />

      <h1 className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[PilatExtended-Heavy] text-[30px] sm:text-[50px]">
        HYPERMOVE...
      </h1>
    </div>
  );
};

export default CoverPage;
