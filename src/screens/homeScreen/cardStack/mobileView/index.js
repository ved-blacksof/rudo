import React  from "react";
import "./index.css";


export default function MobileCarousel() {
  return (
    <div className="mb-14 mt-20">
      <div className="mobile-item-3 h-[250px]  px-4 py-4 mx-4 rounded-xl my-6">
        <h1 className=" text-white font-vanio text-xl ">
          Saving and investing was <br /> never so fun and breezy!
        </h1>
        <p className="text-[12px]  text-white  font-epilogue">
          Invest to load your treasure chest in a fun way!
        </p>
      </div>

      <div className="mobile-item-2  px-4 py-4 mx-4 rounded-xl h-[250px]  my-6">
        <h1 className="text-white font-vanio text-xl ">
          Invest small, earn big!
        </h1>
        <p className="text-[12px]  text-white font-epilogue">
          Invest smartly in your best-fit <br /> portfolios and earn exciting
          rewards for it!
        </p>
      </div>
      <div className="mobile-item-1  px-4 py-4 mx-4 rounded-xl h-[250px] my-6">
        <h1 className="text-white font-vanio text-xl ">
          Binge-investing! <br />
          Yes, we are making it a norm!
        </h1>
        <p className="text-[12px]  text-white font-epilogue">
          Explore fun experiences that set you out <br /> to start building your
          wealth!
        </p>
      </div>
    </div>
  );
}
