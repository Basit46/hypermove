import React from "react";

const Footer = () => {
  const links = [
    "The game",
    "Tournament",
    "Story",
    "Variant and Weapons",
    "Blogs",
    "Privacy Policy",
    "About Us",
  ];
  return (
    <div className="px-[60px] w-full pb-[50px]">
      <footer className="relative w-full rounded-[20px]">
        <div className="p-[20px] pb-[60px] w-full h-full flex flex-col gap-[15px]">
          {links.map((link, id) => (
            <div key={id} className="flex items-center gap-[20px] group">
              <div className="hidden mt-[5px] group-hover:block h-[10px] w-[25px] bg-white"></div>
              <a
                href="#"
                className="uppercase font-[PilatExtended-Bold] text-[32px] leading-[1] text-white"
              >
                {link}
              </a>
            </div>
          ))}
        </div>

        <div className="absolute origin-left rotate-[-90deg] right-[-175px] bottom-[-30px] h-[60px] w-[200px] bg-white dark:bg-black grid place-items-center">
          <button className="whitespace-nowrap font-Montserrat font-[600] text-[22px]">
            👉 UP TO TOP
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
