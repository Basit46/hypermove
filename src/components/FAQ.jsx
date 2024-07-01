import React, { useState } from "react";
import { MdKeyboardArrowDown as Arrow } from "react-icons/md";

const FAQ = () => {
  return (
    <div className="pb-[100px] vsm:py-[100px]">
      <h1 className="text-center text-[16px] vsm:text-[24px] uppercase leading-[1.1]">
        Frequently asked <br /> questions
      </h1>

      <div>
        <div className="mt-[30px] px-[20px] md:px-[40px] lg:px-[60px] flex flex-col lg:flex-row gap-[15px] justify-between">
          <div className="w-full lg:w-[48%] flex flex-col gap-[15px]">
            {faqs
              .filter((_, i) => i < 6)
              .map((faq, i) => (
                <Question key={i} faq={faq} />
              ))}
          </div>

          <div className="w-full lg:w-[48%] flex flex-col gap-[15px]">
            {faqs
              .filter((_, i) => i > 5)
              .map((faq, i) => (
                <Question key={i} faq={faq} />
              ))}
          </div>
        </div>
        <div className="hidden lg:block mt-[30px] px-[20px] md:px-[40px] lg:px-[60px]">
          {faqs
            .filter((_, i) => i == 11)
            .map((faq, i) => (
              <Question key={i} faq={faq} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const Question = ({ faq }) => {
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
        <h1 className="uppercase text-[12px] vsm:text-[16px]">
          {faq.question}
        </h1>

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
        <p className="text-[10px] vsm:text-[12px] font-Montserrat opacity-70">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

const faqs = [
  {
    question: "What is Hypermove Games?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question: "How can I earn rewards in Hypermove Games?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question: "How does Hypermove support game creators and developers?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question: "How can I earn rewards in Hypermove Games?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question:
      "What technologies does Hypermove Games use to enhance player immersion?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question: "How does Hypermove Games use blockchain technology?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question: "What are the benefits of using $HYPE tokens?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question:
      "What makes Hypermove Games different from other gaming platforms?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question: "What is the mission and vision of Hypermove Games?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question: "How does Hypermove Games support a player-driven economy?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question:
      "How does Hypermove Games ensure cross-platform accessibility and a seamless user experience?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
  {
    question: "What game modes are available in Hypermove Games?",
    answer:
      "Hypermove Games is the first decentralized AI x Gaming project in the Bitcoin ecosystem, offering an immersive gaming experience tailored for FPS gamers on both PC and mobile platforms. It leverages cutting-edge AI, generative technologies, and web3 principles to deliver unique and dynamic gameplay.",
  },
];
