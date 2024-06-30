import React, { useState } from "react";
import { MdKeyboardArrowDown as Arrow } from "react-icons/md";

const FAQ = () => {
  return (
    <div className="py-[100px]">
      <h1 className="text-center text-[24px] uppercase leading-[1.1]">
        Frequently asked <br /> questions
      </h1>

      <div>
        <div className="mt-[30px] px-[20px] md:px-[40px] xmd:px-[60px] flex justify-between">
          <div className="w-[48%] flex flex-col gap-[15px]">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
          </div>

          <div className="w-[48%] flex flex-col gap-[15px]">
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
          </div>
        </div>
        <div className="mt-[30px] px-[20px] md:px-[40px] xmd:px-[60px]">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const Question = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen ? "bg-faq-gradient" : "bg-[#FFFFFF0D]"
      } w-full h-fit rounded-[20px]`}
    >
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-[90px] px-[20px] flex items-center justify-between"
      >
        <h1 className="uppercase">What is Hypermove Games?</h1>

        <button>
          <Arrow
            className={`${
              isOpen ? "rotate-[0deg]" : "rotate-[-90deg]"
            } duration-300 text-[30px]`}
          />
        </button>
      </div>
      <div
        className={`${
          isOpen ? "h-[100px]" : "h-0"
        } duration-300 overflow-hidden px-[20px]`}
      >
        <p className="text-[12px] font-Montserrat opacity-70">
          Hypermove Games is the first decentralized AI x Gaming project in the
          Bitcoin ecosystem, offering an immersive gaming experience tailored
          for FPS gamers on both PC and mobile platforms. It leverages
          cutting-edge AI, generative technologies, and web3 principles to
          deliver unique and dynamic gameplay.
        </p>
      </div>
    </div>
  );
};
