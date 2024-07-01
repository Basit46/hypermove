import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const CoverPage = () => {
  const container = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".text", { opacity: 0, delay: 1 })
      .to(".cover", {
        height: 0,
        stagger: 0.2,
        duration: 1,
        delay: -0.8, // Start this animation 0.8 seconds before the previous one ends
      })
      .to(".main", { height: 0, duration: 0.1 }, "-=0.2"); // Start this animation 0.2 seconds before the previous one ends
  }, []);

  return (
    <div
      ref={container}
      className="main fixed z-[200] top-0 left-0 w-full h-screen flex"
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
