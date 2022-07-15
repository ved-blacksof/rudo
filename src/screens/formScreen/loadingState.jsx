import React from "react";

const LoadingState = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 bg-dark bg-opacity-30 z-[10000] grid place-content-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#ffa400"
          strokeWidth="10"
          r="35"
          stroke-dasharray="164.93361431346415 56.97787143782138"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};
export default LoadingState;
