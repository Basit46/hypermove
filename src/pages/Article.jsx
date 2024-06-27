import React from "react";
import img from "../assets/ArticleLargeImg.png";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div
        onClick={() => navigate(-1)}
        className="border-b border-b-white border-opacity-10 cursor-pointer pb-[20px] mx-[20px] flex gap-[10px] items-center"
      >
        <HiOutlineArrowLeft />
        <p>Go back</p>
      </div>
      <div>
        <div className="mt-[30px] w-full xmd:h-[752px]">
          <img className="w-full h-fit xmd:h-full" src={img} alt="Article" />
        </div>
        <div className="mt-[20px] sm:px-[40px] flex items-center justify-between">
          <div className="flex gap-[10px]">
            <div className="mb-[5px] w-fit px-[16px] py-[4px] rounded-[8px] bg-[#8062FF21] text-[12px] text-white text-opacity-50">
              Crypto Investment
            </div>
            <div className="mb-[5px] w-fit px-[16px] py-[4px] rounded-[8px] bg-[#8062FF21] text-[12px] text-white text-opacity-50">
              Tutorials
            </div>
          </div>
          <p
            className={` text-white text-opacity-30 text-[12px] font-Montserrat`}
          >
            29 December 2024{" "}
            <span className="hidden md:inline-block">| By Alexis Richard</span>
          </p>
        </div>
        <div className="mt-[30px] sm:px-[40px]">
          <h1 className="text-[24px] sm:text-[40px] font-bold font-Montserrat">
            Lorem Ipsum is simply dummy text of the printing.
          </h1>
          <p className="mt-[10px] text-[14px] sm:text-[18px] font-Montserrat font-[300] opacity-70 leading-[27px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the relea Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
