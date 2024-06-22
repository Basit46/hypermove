import React from "react";

const Footer = () => {
  return (
    <div className="bg-black px-[60px] w-full pb-[50px]">
      <footer className="relative w-full min-h-[400px] rounded-[20px]">
        <div className="absolute right-0 top-0 h-full w-[50px] flex flex-col bg-[black]">
          <div className="w-full relative h-[55%] rounded-r-[20px] bg-[#8062ff]"></div>
          <div className="w-full h-[45%] rounded-tl-[20px] bg-black" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
