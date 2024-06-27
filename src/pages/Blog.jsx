import React from "react";
import line from "../assets/blogFrame.png";
import gradient from "../assets/blogGradient.png";
import articleImg from "../assets/ArticleImg.png";
import articleImg2 from "../assets/ArticleImg-2.png";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  return (
    <div className="blog-page min-h-screen mt-[100px] sm:mt-[150px] mb-[100px]">
      <div className="px-[20px]">
        <p className="uppercase font-[600] text-[24px] sm:text-[32px] text-center">
          Blog
        </p>
        <p className="uppercase text-[10px] vsm:text-[14px] text-center">
          Discover the latest in crypto and play-to-earn gaming
        </p>
      </div>

      <div className="relative mt-[30px] min-h-[50vh] flex flex-col">
        <div className="">
          <img className="w-full" src={line} alt="line" />
        </div>
        <div className="flex-1">
          <div className="nav mx-auto mt-[30px] w-[50%] h-[28px] bg-[#FFFFFF0D] flex items-center">
            <div className="active text-black h-full w-[114px] grid place-items-center font-Montserrat font-medium text-[14px]">
              TAB1
            </div>
            <div className="h-full w-[114px] grid place-items-center font-Montserrat font-medium text-[14px]">
              TAB2
            </div>
            <div className="h-full w-[114px] grid place-items-center font-Montserrat font-medium text-[14px]">
              TAB2
            </div>
            <div className="h-full w-[114px] hidden md:grid place-items-center font-Montserrat font-medium text-[14px]">
              TAB2
            </div>
            <div className="h-full w-[114px] hidden md:grid place-items-center font-Montserrat font-medium text-[14px]">
              TAB2
            </div>
            <div className="h-full w-[114px] hidden md:grid place-items-center font-Montserrat font-medium text-[14px]">
              TAB2
            </div>
            <div className="h-full w-[114px] hidden md:grid place-items-center font-Montserrat font-medium text-[14px]">
              TAB2
            </div>
          </div>

          <div className="relative z-[2] mt-[30px] flex flex-wrap justify-center gap-[20px] px-[20px]">
            <Article />
            <Article />
            <Article />
            <Article large={true} />
            <Article large={true} />
            <Article />
            <Article />
            <Article />
          </div>
        </div>

        <img
          className="absolute top-[6px] sm:top-[17px] left-0 w-full"
          src={gradient}
          alt="gradient"
        />
      </div>
    </div>
  );
};

export default Blog;

export const Article = ({ large }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/article/1")}
      className={`article ${
        large
          ? "article-clip2 hidden md:flex w-[508px] h-[395px]"
          : "article-clip1 w-full md:w-[330px] h-[452px]"
      }  rounded-[20px] cursor-pointer p-[10px] flex flex-col`}
    >
      {large ? (
        <img
          className="w-full h-fit md:h-[210px]"
          src={articleImg2}
          alt="article"
        />
      ) : (
        <img
          className="w-full h-fit md:h-[210px]"
          src={articleImg}
          alt="article"
        />
      )}
      <div className="mt-[20px] flex flex-col">
        <div className="mb-[5px] w-fit px-[16px] py-[4px] rounded-[8px] bg-[#8062FF21] text-[12px] text-white text-opacity-50">
          Product Updates
        </div>
        <h4 className="font-medium text-[14px] font-Montserrat">
          Lorem Ipsum is simply dummy text of the printing.
        </h4>
        <p className="text-white text-opacity-50 text-[12px] font-Montserrat">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
      </div>
      <p
        className={`${
          large ? "text-center" : "text-end"
        } mt-auto text-white text-opacity-30 text-[12px] font-Montserrat`}
      >
        29 December 2024 | By Alexis Richard
      </p>
    </div>
  );
};
