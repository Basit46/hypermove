import React from "react";
import blogImg from "../assets/blogImg.png";
import border1 from "../assets/articleBorder1.png";
import date1 from "../assets/articleDate1.svg";
import img1 from "../assets/articleImg1.png";
import border2 from "../assets/articleBorder2.png";
import img2 from "../assets/articleImg2.png";

const Blog = () => {
  return (
    <div className="blog mt-[100px]">
      <h1 className="leading-none pr-[20px] xmd:pr-[200px] text-end text-outline text-[50px] md:text-[50px] xmd:text-[90px] text-transparent font-[PilatExtended-Heavy]">
        BLOGS
      </h1>
      <p className="pr-[20px] md:pr-[60px] text-end uppercase text-[30px] xmd:text-[32px] font-[PilatExtended-Heavy]">
        latest news
      </p>

      <div className="mt-[20px] relative flex justify-center h-fit gap-[40px] items-center">
        <div className="hidden lg:block h-full">
          <div className="group cursor-pointer">
            <div className="article1 relative flex justify-center items-center group-hover:translate-x-[-100px] duration-200 group-hover:bg-article-gradient">
              <img src={border1} alt="border" />
              <div className="absolute w-full h-full px-[20px] py-[15px] flex flex-col justify-between">
                <p className="text-[16px] font-semibold opacity-70 uppercase">
                  Lorem ipsum dolor sit amet
                </p>
                <div className="flex justify-between">
                  <img src={img1} alt="article" />
                  <img src={date1} alt="article" />
                </div>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="article1 relative flex justify-center items-center group-hover:translate-x-[-100px] duration-200 group-hover:bg-article-gradient">
              <img src={border1} alt="border" />
              <div className="absolute w-full h-full px-[20px] py-[15px] flex flex-col justify-between">
                <div className="flex justify-between">
                  <img src={date1} alt="article" />
                </div>
                <p className="text-[16px] text-end font-semibold opacity-70 uppercase">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="article2 relative flex justify-center items-center group-hover:translate-x-[-100px] duration-200 group-hover:bg-article-gradient">
              <img src={border2} alt="border" />
              <div className="absolute w-full h-full px-[20px] py-[15px] flex flex-col justify-between">
                <div className="flex justify-between">
                  <img src={img2} alt="article" />
                  <img src={date1} alt="article" />
                </div>
                <p className="text-[16px] font-semibold opacity-70 uppercase">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[90%] md:w-fit h-fit">
          <img src={blogImg} alt="game demo" />
          <p className="absolute bottom-[20px] left-[10px] w-full text-[12px] md:text-[14px] text-[#D9D9D9] opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
