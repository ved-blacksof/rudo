import "./index.css";
import React  from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";


export default function animationCarousel() {
  return (
    <Splide
      options={{
        height: 250,
        type: "loop",
        rewind: true,
        wheel: true,
        pagination: true,
        arrows: false,
        autoplay: true,
        padding: 35,
      }}
      className="animation sm:my-14 -z-10"
    >
      <SplideSlide>
        <div className="animation-item-1 h-full px-4 py-4 mx-2 rounded-xl">
          <h1 className="text-black font-vanio text-xl ">
            Keep that change. <br /> No, literally!
          </h1>
          <p className="text-[12px]  text-black  font-epilogue">
            As they say, “starting <br /> small helps you gain big”
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="animation-item-2 h-full px-4 py-4 mx-2 rounded-xl">
          <h1 className="text-black font-vanio text-xl ">Invest Smart!</h1>
          <p className="text-[12px]  text-black  font-epilogue">
            Your money, our brains! Choose a <br /> portfolio strategy tailored
            just for you!
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="animation-item-3 h-full px-4 py-4 mx-2 rounded-xl">
          <h1 className=" text-black font-vanio text-xl ">
            Salary Credited! <br />
            Salary Debited!
          </h1>
          <p className="text-[12px]  text-black  font-epilogue">
            That was fast! Wondering <br /> what happened to all that money?
          </p>
        </div>
      </SplideSlide>
    </Splide>
  );
}
