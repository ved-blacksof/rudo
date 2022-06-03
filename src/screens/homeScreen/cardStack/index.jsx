import { useEffect } from "react";
import "./index.css";

const btnCb = () => {
  console.log("this is btn cb");
};
const CardStack = () => {
  useEffect(() => {
    // to be  deprecated in following builds
    let sliderImagesBox = document.querySelectorAll(".cards-box ");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".card:not(.hide)");
      let arrIndexes = [];
      (() => {
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i];
        }
      };
      arrIndexes.unshift(arrIndexes.pop());
      setIndex(arrIndexes);

      el.addEventListener("click", (event) => {
        event.stopPropagation();
        if (event.target.classList.contains("btn")) {
          return btnCb();
        }
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      });
    });
  }, []);

  return (
    <div className="cards-box md:w-11/12 min-h-[38rem] mx-auto flex items-center justify-center  my-32  ">
      <div className="card item-1  md:w-[40rem] w-full md:min-h-[35rem] rounded-xl mx-auto">
        <div className=" px-8 py-8 xl:px-20 xl:py-20 flex  flex-col flex-nowrap items-start justify-start gap-4">
          <h1 className=" text-3xl text-white font-vanio  md:text-4xl xl:text-5xl max-w-screen-sm">
            Saving and investing was never so fun and breeeezyyyy!
          </h1>
          <p className="text-lg text-white font-epilogue  md:text-xl xl:text-2xl max-w-screen-sm ">
            Invest to load your treasure chest in a fun way!
          </p>
          <button className=" btn pt-5 pb-3 px-8 text-lg xl:text-xl text-white font-epilogue bg-red rounded-full hover:bg-darkRed transition-colors duration-300 cursor-pointer ">
            Join The Waitlist
          </button>
        </div>
      </div>

      <div className="card item-2  md:w-[40rem] w-full md:min-h-[35rem] rounded-xl mx-auto ">
        <div className=" px-8 py-8 xl:px-20 xl:py-20 flex  flex-col flex-nowrap items-start justify-start gap-4">
          <h1 className=" text-3xl text-white font-vanio  md:text-4xl xl:text-5xl max-w-screen-sm ">
            Invest small, earn big!
          </h1>
          <p className="text-lg text-white font-epilogue  md:text-xl xl:text-2xl max-w-screen-sm">
            Invest smartly in your best-fit portfolios and earn exciting rewards
            for it!
          </p>
          <button className=" btn pt-5 pb-3 px-8 text-lg xl:text-xl text-white font-epilogue bg-red rounded-full hover:bg-darkRed transition-colors duration-300 cursor-pointer ">
            Join The Waitlist
          </button>
        </div>
      </div>

      <div className="card item-3 md:w-[40rem] w-full xl:w-[75rem] md:min-h-[35rem] rounded-xl mx-auto">
        <div className=" px-8 py-8 xl:px-20 xl:py-20 flex  flex-col flex-nowrap items-start justify-start gap-4">
          <h1 className=" text-3xl text-white font-vanio  md:text-4xl xl:text-5xl max-w-screen-sm">
            Binge-investing! <br />
            Yes, we are making it a norm!
          </h1>
          <p className="text-lg text-white font-epilogue  md:text-xl xl:text-2xl max-w-screen-sm">
            Explore fun experiences that set you out to start building your
            wealth!
          </p>

          <button className=" btn pt-5 pb-3 px-8 text-lg xl:text-xl text-white font-epilogue bg-red rounded-full hover:bg-darkRed transition-colors duration-300 cursor-pointer ">
            Join The Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardStack;
