import React from "react";

const BottomSvg = ({ text }) => {
  return (
    <svg
      width="351"
      height="89"
      viewBox="0 0 351 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M279.493 0.5H16.5C7.93958 0.5 1 7.43959 1 16V56.7412C1 61.6247 3.30151 66.2227 7.21097 69.1494L28.9294 85.4082C31.6104 87.4153 34.8694 88.5 38.2184 88.5H65.2861H285.5H334.286C342.847 88.5 349.786 81.5604 349.786 73V63.8905C349.786 59.4179 347.854 55.1633 344.486 52.22L289.693 4.32941C286.869 1.86059 283.244 0.5 279.493 0.5Z"
        stroke="url(#paint0_linear_2744_970)"
      />
      <path
        d="M279.493 0.5H16.5C7.93958 0.5 1 7.43959 1 16V56.7412C1 61.6247 3.30151 66.2227 7.21097 69.1494L28.9294 85.4082C31.6104 87.4153 34.8694 88.5 38.2184 88.5H65.2861H285.5H334.286C342.847 88.5 349.786 81.5604 349.786 73V63.8905C349.786 59.4179 347.854 55.1633 344.486 52.22L289.693 4.32941C286.869 1.86059 283.244 0.5 279.493 0.5Z"
        stroke="url(#paint1_linear_2744_970)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2744_970"
          x1="109"
          y1="-70.9999"
          x2="151.096"
          y2="-40.4559"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6842FF" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2744_970"
          x1="302"
          y1="69"
          x2="114.772"
          y2="7.76847"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6842FF" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <text
        x="10"
        y="30"
        className="text-white text-[20px] uppercase opacity-60"
        fill="white"
        z-index="6"
      >
        {text}
      </text>
    </svg>
  );
};

export default BottomSvg;
