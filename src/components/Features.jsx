import React, { useRef, useState } from "react";
import img1 from "../assets/featImg1.png";
import img2 from "../assets/featImg2.png";
import img3 from "../assets/featImg3.png";
import arrow1 from "../assets/feat-arrow1.png";
import arrow2 from "../assets/feat-arrow2.svg";
import notFilled from "../assets/not-filled.svg";
import filled from "../assets/filled.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
  const featuresRef = useRef();

  useGSAP(
    () => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 50%",
        },
      });

      tl2.from(".imgs", {
        duration: 3,
        opacity: 0,
      });
    },
    { scope: featuresRef }
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
  ];

  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "20px",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    speed: 1000,
    autoplay: true,
    pauseOnHover: false,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    customPaging: (i) => (
      <div className="mt-[10px]">
        {i === currentSlide ? (
          <img className="active" src={filled} alt="icon" />
        ) : (
          <img className="not-active" src={notFilled} alt="icon" />
        )}
      </div>
    ),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div ref={featuresRef} className="px-[30px]">
      <div className="relative mt-[20px] vsm:mt-[40px] sm:mt-[20px] md:mt-[70px] xl:mt-[-140px] w-fit ml-auto">
        <h1 className="hidden xl:block ml-auto text-outline text-[70px] text-transparent font-[PilatExtended-Heavy]">
          FEATURES
        </h1>
        <h3 className="vsm:mt-[-25px] mb-[50px] vsm:mb-0 text-[20px] md:text-[32px] clip-text font-[PilatExtended-Heavy] bg-custom-gradient2">
          WHAT WE OFFER?
        </h3>
      </div>

      {/* scale-[2.2] vsm:scale-[1.2] */}

      <div className="imgs vsm:mt-[30px]">
        <div className="slider-container h-fit w-full">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`${
                  index === currentSlide
                    ? "scale-[1.0] vsm:scale-[1.0]"
                    : "slide"
                }  w-[397px] h-fit vsm:h-[357px]`}
              >
                <img
                  className="h-full w-full object-contain"
                  src={slide.img}
                  alt="game feature"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <p className="mt-[30px] text-[12px] text-center">
        Enter a dystopian future where factions fight for control. Join skilled{" "}
        <br /> heroes in epic team-based combat.
      </p>
    </div>
  );
};

export default Features;

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      style={{ ...style, display: "block" }}
      className="absolute z-[20] left-[-70px] top-1/2 -translate-y-1/2"
    >
      <img src={arrow1} alt="arrow" />
    </button>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      style={{ ...style, display: "block" }}
      onClick={onClick}
      className="absolute z-[5] right-[-70px] top-1/2 -translate-y-1/2"
    >
      <img src={arrow2} alt="arrow" />
    </button>
  );
}
