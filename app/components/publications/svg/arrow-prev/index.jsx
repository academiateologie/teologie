import React from 'react'
import styles from "./arrow.prev.module.scss"

const Index = ({ isActiveArrow, setIsActiveArrow }) => {
  return (
    <svg
      className="w-[6rem] h-[11rem]"
      viewBox="0 0 6 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M-0.25 4.92L4.61 9.82C4.73 9.93 4.88 10 5.04 10C5.2 10 5.35 9.93 5.46 9.82L5.82 9.46C6.05 9.22 6.05 8.84 5.82 8.61L1.73 4.5L5.82 0.38C5.93 0.27 5.99 0.12 5.99 -0.04C5.99 -0.2 5.93 -0.36 5.82 -0.47L5.46 -0.83C5.35 -0.94 5.2 -1 5.04 -1C4.88 -1 4.73 -0.94 4.62 -0.83L-0.25 4.07C-0.36 4.18 -0.42 4.34 -0.42 4.5C-0.42 4.66 -0.36 4.81 -0.25 4.92L-0.25 4.92Z"
        fill={isActiveArrow ? "#272B37" : "#D9D9D9"}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Index