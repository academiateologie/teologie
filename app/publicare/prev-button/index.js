// "use client"
import React from "react";
import Link from "next/link";

function Index({ href, disabled }) {
  if (disabled) {
    return (
      <button className="disabled:cursor-not-allowed" disabled>
        <svg
          className="w-[7rem] h-[12rem] tablet:w-[7rem] tablet:h-[12rem]"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.189872 6.46841L5.49242 11.8083C5.61497 11.932 5.77868 12 5.95329 12C6.12791 12 6.29162 11.932 6.41416 11.8083L6.8048 11.4151C7.05885 11.159 7.05885 10.7425 6.8048 10.4869L2.35206 6.00256L6.80964 1.51338C6.93219 1.38973 7 1.2251 7 1.04925C7 0.873397 6.93219 0.708522 6.80964 0.584866L6.41925 0.191703C6.29646 0.0680466 6.13299 -8.77878e-07 5.95838 -8.62613e-07C5.78377 -8.47348e-07 5.62005 0.0680467 5.49751 0.191703L0.190115 5.53647C0.0670866 5.66037 -0.000239435 5.82598 2.33667e-06 6.00207C-0.000481638 6.17866 0.0670867 6.34426 0.190115 6.46816L0.189872 6.46841Z"
            fill={disabled ? "#D9D9D9" : "#272B37"}
          />
        </svg>
      </button>
    );
  }

  return (
    <Link href={href} scroll={false} legacyBehavior>
      <a className="">
        <svg
          className="w-[7rem] h-[12rem] tablet:w-[7rem] tablet:h-[12rem]"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.189872 6.46841L5.49242 11.8083C5.61497 11.932 5.77868 12 5.95329 12C6.12791 12 6.29162 11.932 6.41416 11.8083L6.8048 11.4151C7.05885 11.159 7.05885 10.7425 6.8048 10.4869L2.35206 6.00256L6.80964 1.51338C6.93219 1.38973 7 1.2251 7 1.04925C7 0.873397 6.93219 0.708522 6.80964 0.584866L6.41925 0.191703C6.29646 0.0680466 6.13299 -8.77878e-07 5.95838 -8.62613e-07C5.78377 -8.47348e-07 5.62005 0.0680467 5.49751 0.191703L0.190115 5.53647C0.0670866 5.66037 -0.000239435 5.82598 2.33667e-06 6.00207C-0.000481638 6.17866 0.0670867 6.34426 0.190115 6.46816L0.189872 6.46841Z"
            fill={disabled ? "#D9D9D9" : "#272B37"}
          />
        </svg>
      </a>
    </Link>
  );
}

export default Index;
