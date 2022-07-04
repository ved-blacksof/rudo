import { useState } from "react";
import React  from "react";

const Ribbon = () => {
  const [isVisible, setVisible] = useState(true);
  return (
    <div className=" font-epilogue bg-gradient-to-r from-headerPink to-headerWhite">
      <div
        className={` ${
          isVisible ? "h-14 opacity-1 pt-2 pb-1  px-3" : "h-0 opacity-0"
        } flex flex-nowrap items-center justify-center lg:w-11/12 mx-auto  gap-3 transition-all durtion-300 ease-in-out`}
      >
        <div className="flex-1 overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap divide-x-2 divide-dark text-lg lg:text-2xl ">
            <span className="px-3">
              First 1000 Members Get 12 Months Of Free Subscription And 50%
              Lifetime Discount Thereon!
            </span>
            <span className="px-3">
              First 1000 Members Get 12 Months Of Free Subscription And 50%
              Lifetime Discount Thereon!
            </span>
            <span className="px-3 ">
              First 1000 Members Get 12 Months Of Free Subscription And 50%
              Lifetime Discount Thereon!
            </span>
          </div>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="hover:bg-red h-10 w-10 circle rounded-full grid place-content-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Ribbon;
