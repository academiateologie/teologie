import React from 'react'
import styles from "./arrow.next.module.scss"

const Index = ({ isActiveArrow, setIsActiveArrow }) => {
  return (
    <svg
      className="w-[6rem] h-[11rem]"
      viewBox="0 0 7 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M6.24 4.07L1.38 -0.83C1.26 -0.94 1.11 -1 0.95 -1C0.79 -1 0.64 -0.94 0.53 -0.83L0.17 -0.47C-0.06 -0.23 -0.06 0.15 0.17 0.38L4.26 4.49L0.17 8.61C0.06 8.72 0 8.87 0 9.03C0 9.19 0.06 9.35 0.17 9.46L0.53 9.82C0.64 9.93 0.79 10 0.95 10C1.11 10 1.26 9.93 1.37 9.82L6.24 4.92C6.35 4.81 6.41 4.65 6.41 4.49C6.41 4.33 6.35 4.18 6.24 4.07L6.24 4.07Z"
        fill={!isActiveArrow ? "#272B37" : "#D9D9D9"}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default Index