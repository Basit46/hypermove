import React from "react";
import blogImg from "../assets/blogImg.png";
import border1 from "../assets/articleBorder1.png";
import date1 from "../assets/articleDate1.svg";
import img1 from "../assets/articleImg1.png";

const Blog = () => {
  return (
    <div className="blog mt-[100px] min-h-[100vh]">
      <h1 className="leading-none pr-[200px] text-end text-outline text-[90px] text-transparent font-[PilatExtended-Heavy]">
        BLOGS
      </h1>
      <p className="pr-[60px] text-end uppercase text-[32px] font-[PilatExtended-Heavy]">
        latest news
      </p>

      <div className="mt-[20px] relative flex justify-center h-fit gap-[40px] items-center">
        <div className="h-full">
          <div className="bg-[red]">
            <div className="article1 relative flex justify-center items-center hover:translate-x-[-100px] duration-200 hover:bg-article-gradient cursor-pointer">
              <img src={border1} alt="border" />
              <div className="absolute w-full h-full px-[20px] py-[15px] flex flex-col justify-between">
                <p className="text-[16px] opacity-70 uppercase">
                  Lorem ipsum dolor sit amet
                </p>
                <div className="flex justify-between">
                  <img src={img1} alt="article" />
                  <img src={date1} alt="article" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-fit h-fit">
          <img src={blogImg} alt="game demo" />
          <p className="absolute bottom-[20px] left-[10px] w-full text-[14px] text-[#D9D9D9] opacity-70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
