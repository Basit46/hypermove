import React from "react";
import aboutLogo from "../assets/aboutLogo.svg";
import aboutImg1 from "../assets/aboutImg1.svg";
import aboutImg2 from "../assets/aboutImg2.png";
import aboutImg3 from "../assets/aboutImg3.png";
import aboutImg4 from "../assets/aboutImg4.png";
import aboutImg5 from "../assets/aboutImg5.svg";
import line from "../assets/aboutLine.svg";
import latern from "../assets/aboutMainImg.png";
import gradient from "../assets/aboutGradient.png";
import Roadmap from "../components/Roadmap";

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

        <div className="relative my-[50px]">
          <img className="w-full " src={line} alt="line" />
          <div className="bg-[#000513] absolute top-[-5px] right-[400px] px-[10px] py-[1px] text-[24px]">
            FEATURES
          </div>
        </div>

        <div className="h-fit px-[20px] sm:px-[40px] flex gap-[30px]">
          <div className="w-[75%] flex flex-col">
            {list.map((item, i) => (
              <div
                key={i}
                className="py-[20px] border-b border-white border-opacity-10 h-fit flex justify-between"
              >
                <div className="flex gap-[10px] items-center">
                  <img src={aboutImg5} alt="desc" />
                  <p className="text-[14px] uppercase">{item.text1}</p>
                </div>

                <p className="w-[48%] text-end uppercase text-[14px] opacity-75">
                  {item.text2}
                </p>
              </div>
            ))}
          </div>

          <div className="features-box flex-1 h-[638px]"></div>
        </div>

        <div className="relative mt-[70px]">
          <img className="mx-auto" src={latern} alt="latern" />
          <div className="absolute left-0 top-0 w-full h-full flex flex-col items-center justify-center gap-[30px]">
            <div className="w-full px-[200px] flex justify-between items-center">
              <Shape1
                text1="Personalized Information Gathering"
                text2="Hypermove employs player data gathering to personalize NPC interactions
        and experiences, fostering tailored gameplay encounters"
              />
              <Shape2 />
            </div>
            <div className="w-full px-[80px] flex justify-between items-center">
              <Shape3 />
              <Shape4 />
            </div>
            <div className="w-full px-[200px] flex justify-between items-center">
              <Shape5 />
              <Shape1
                text1="Human-like AI Behavior:"
                text2="Our objective is to develop non-player characters (NPCs) that exhibit human-like intelligence and adaptability, elevating the level of realism and depth within our gaming environments."
              />
            </div>
          </div>
        </div>

        <div className="relative h-[900px] flex flex-col">
          <img
            className="absolute top-0 left-0 w-full "
            src={gradient}
            alt="gradient"
          />
          <img className="w-full" src={line} alt="line" />

          <Roadmap />
        </div>
      </div>
    </div>
  );
};

export default About;

const Shape1 = ({ text1, text2 }) => {
  return (
    <div className="shape1 w-[409px] h-[217px] backdrop-blur-[50px] px-[20px] pt-[20px] flex flex-col gap-[10px] items-end ">
      <div className="size-[38px] rounded-full bg-hero-gradient" />
      <h1 className="text-[18px] clip-text bg-hero-gradient font-[PilatExtended-Bold] uppercase leading-[1.1] text-end">
        {text1}
      </h1>
      <p className="font-[PilatExtended-Light] text-[10px] text-end">{text2}</p>
    </div>
  );
};

const Shape2 = () => {
  return (
    <div className="shape2 w-[409px] h-[217px] backdrop-blur-[50px] pl-[80px] pt-[50px] flex flex-col gap-[10px]">
      <div className="size-[38px] rounded-full bg-hero-gradient" />
      <h1 className="text-[18px] clip-text bg-hero-gradient font-[PilatExtended-Bold] uppercase leading-[1.1]">
        Decentralized AI
      </h1>
      <p className="w-[80%] font-[PilatExtended-Light] text-[10px]">
        Integrating decentralized artificial intelligence (DeAI) allows for
        distributed decision-making and intelligence within our gaming
        ecosystem, enhancing game dynamics and complexity
      </p>
    </div>
  );
};

const Shape3 = () => {
  return (
    <div className="shape3 w-[409px] h-[195px] backdrop-blur-[50px] px-[30px] pt-[30px] flex flex-col gap-[10px]">
      <div className="size-[38px] rounded-full bg-hero-gradient" />
      <h1 className="text-[18px] clip-text bg-hero-gradient font-[PilatExtended-Bold] uppercase leading-[1.1]">
        AI Voices Integration
      </h1>
      <p className="font-[PilatExtended-Light] text-[10px]">
        Through collaboration with ElevenLabs AI voices, Hypermove leverages
        cutting-edge technology for character voice generation.
      </p>
    </div>
  );
};

const Shape4 = () => {
  return (
    <div className="shape4 w-[409px] h-[195px] backdrop-blur-[50px] px-[30px] pt-[30px] flex flex-col gap-[10px]">
      <div className="size-[38px] rounded-full bg-hero-gradient" />
      <h1 className="text-[18px] clip-text bg-hero-gradient font-[PilatExtended-Bold] uppercase leading-[1.1]">
        Emotion Recognition
      </h1>
      <p className="font-[PilatExtended-Light] text-[10px]">
        Utilizing sophisticated algorithms, AI NPCs can recognize and respond to
        player emotions, enriching interactions and enhancing gameplay
        dynamics. 
      </p>
    </div>
  );
};

const Shape5 = () => {
  return (
    <div className="shape5 w-[409px] h-[195px] backdrop-blur-[50px] px-[40px] pt-[50px] flex flex-col gap-[10px]">
      <div className="size-[38px] rounded-full bg-hero-gradient" />
      <h1 className="text-[18px] clip-text bg-hero-gradient font-[PilatExtended-Bold] uppercase leading-[1.1]">
        Adaptive Behavior
      </h1>
      <p className="font-[PilatExtended-Light] text-[10px]">
        AI NPCs adapt their behavior and strategies based on evolving game
        scenarios and player actions.
      </p>
    </div>
  );
};

const list = [
  {
    text1: "Anti-Cheat Mechanisms",
    text2:
      "Advanced algorithms monitor activities & analyze analyzing various in-game data points to detect cheating.",
  },
  {
    text1: "Accessibility",
    text2: "Free for All, Playable on PC.",
  },
  {
    text1: "Game Genre",
    text2:
      "Hypermove Games is a 5v5 tactical based shooting game offering an immersive gaming experience.",
  },
  {
    text1: "Esports",
    text2:
      "Hypermove aims to revolutionize competitive gaming with a focus on fairness, skill, and integrity.",
  },
  {
    text1: "Utilisation of AI",
    text2:
      "Hypermove stands at the forefront by utilising Artificial Intelligence in every possible aspects within the ecosystem.",
  },
  {
    text1: "Simplified Onboarding",
    text2:
      "Hypermove Games simplifies onboarding with account abstraction, making blockchain interactions easy.",
  },
];
