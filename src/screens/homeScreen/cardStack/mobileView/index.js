import "./index.css";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
export default function MobileCarousel() {
  return (
    <Splide
      options={{
        height: 250,
        rewind: true,
        wheel: true,
        pagination: true,
        arrows: false,
        autoplay: true,
        padding: 35,
      }}
    >
      <SplideSlide>
        <div className="mobile-item-1 h-full px-4 py-4 mx-2 rounded-xl">
          <h1 className="text-white font-vanio text-xl ">
            Binge-investing! <br />
            Yes, we are making it a norm!
          </h1>
          <p className="text-[12px]  text-white  font-epilogue">
            Explore fun experiences that set you out to start building your
            wealth!
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="mobile-item-2 h-full px-4 py-4 mx-2 rounded-xl">
          <h1 className="text-white font-vanio text-xl ">
            Invest small, earn big!
          </h1>
          <p className="text-[12px]  text-white  font-epilogue">
            Invest smartly in your best-fit portfolios and earn exciting rewards for it!
          </p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="mobile-item-3 h-full px-4 py-4 mx-2 rounded-xl">
          <h1 className=" text-white font-vanio text-xl ">
            Saving and investing was never so fun and breeeezyyyy!
          </h1>
          <p className="text-[12px]  text-white  font-epilogue">
            Invest to load your treasure chest in a fun way!
          </p>
        </div>
      </SplideSlide>
    </Splide>
  );
}
