import React from "react";
import aboutLogo from "../assets/aboutLogo.svg";
import aboutImg1 from "../assets/aboutImg1.svg";
import aboutImg2 from "../assets/aboutImg2.png";
import aboutImg3 from "../assets/aboutImg3.png";
import aboutImg4 from "../assets/aboutImg4.png";

const About = () => {
  return (
    <div className="about-page bg-[#000513] min-h-screen mt-[100px] sm:mt-[150px] mb-[100px]">
      <img className="mx-auto absolute top-0" src={aboutLogo} alt="logo" />
      <h1 className="relative text-[24px] uppercase font-[PilatExtended-Light] text-center opacity-70">
        first Decentralized <br /> AI x Gaming
      </h1>

      <div className="relative mt-[400px] w-full  flex flex-col">
        <div className="relative">
          <img src={aboutImg1} alt="preview" />
          <div className="absolute top-0 right-[250px]">
            <h1 className="uppercase text-[24px] font-[PilatExtended-Bold] clip-text bg-hero-gradient">
              Hypermove Studio
            </h1>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-[40px] bg-[#000513]" />
        </div>
      </div>

      <div className="relative z-[3] mt-[-250px] min-h-[300px] w-full">
        <p className="w-[75%] mx-auto uppercase text-[24px] font-[500] text-center font-Montserrat opacity-70">
          <p>
            Welcome to Hypermove Studio, a trailblazing gaming powerhouse where
            innovation meets expertise.
          </p>
          <p className="mt-[30px]">
            Our dynamic team of over 20 elite professionals, including seasoned
            game developers and industry visionaries, is dedicated to
            revolutionizing the gaming landscape. At Hypermove Studio, we are
            committed to seamlessly integrating blockchain technology with
            traditional game development, bridging the gap between Web2 and
            Web3.
          </p>
        </p>

        <img className="mt-[-80px] mx-auto" src={aboutImg2} alt="preview" />

        <div className="px-[20px] sm:px-[40px] flex justify-between gap-[30px]">
          <div className="pr-[100px]">
            <h1 className="text-[32px] font-[PilatExtended-Bold] leading-[1.2] whitespace-nowrap">
              Our mission <br /> is to ...
            </h1>
            <img className="mt-[20px]" src={aboutImg3} alt="preview" />
          </div>
          <img className="h-fit " src={aboutImg4} alt="preview" />
          <div className="flex-1 text-[18px] font-Montserrat uppercase leading-[27px] opacity-70">
            <p>
              craft immersive AAA-level and hyper-casual games that not only
              captivate players but also redefine their gaming experience.
            </p>
            <p className="mt-[20px]">
              By placing the game economy, marketplace, and asset ownership
              firmly in the hands of our players, we empower them with
              unprecedented control and engagement. Join us as we shape the
              future of gaming, blending cutting-edge technology with
              unparalleled creativity. Hypermove Studio is your gateway to the
              next generation of gaming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
