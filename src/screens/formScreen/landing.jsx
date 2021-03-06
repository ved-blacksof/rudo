import { useDispatchContext } from "../../context";
import FormHeader from "./formHeader";
import lemonBanner from "../../assets/formPage/Lime_and_lemon.svg";
import emoji1 from "../../assets/formPage/Emoji01.svg";
import emoji2 from "../../assets/formPage/Emoji02.svg";
import emoji3 from "../../assets/formPage/Emoji03.svg";
import emoji4 from "../../assets/formPage/Emoji04.svg";
import emoji5 from "../../assets/formPage/Emoji05.svg";

const LandingPage = () => {
  const { moveNext } = useDispatchContext();

  return (
    <>
      <FormHeader moveNext={moveNext} />
      <section className="flex flex-wrap gap-10 justify-center items-center flex-col-reverse sm:flex-row max-w-screen-2xl mx-auto pt-10 sm:pt-10 pb-10 sm:pb-5 md:w-11/12 ">
        <div className="basis-96 grow  shrink px-3">
          <h1 className="text-3xl md:text-4xl xl:text-4xl font-epilogue font-bold md:leading-relaxed xl:leading-tight max-w-screen-md ">
            They say, when life gives you lemons, make lemonade!
          </h1>
          <h1 className=" text-black text-xl md:text-xl xl:text-xl font-epilogue max-w-screen-md mt-3">
            But your lemonade might taste different from others considering how well you play with the ingredients
          </h1>
          <h1 className=" text-black text-xl md:text-xl xl:text-xl font-epilogue max-w-screen-md mt-3">
            Same way, your financial wellness depends on how well you manage different aspects of your life to secure a financially stable future.
          </h1>
          <h1 className=" text-black font-semibold text-xl md:text-xl xl:text-xl font-epilogue max-w-screen-md mt-3">
            Let’s see how your lemonade tastes!
          </h1>
            <button
              className="sm:flex hidden  bg-gradient-to-r from-btnLeft to-btnRight hover:shadow-lg py-2 md:py-1 md:px-3 px-2 rounded-lg xl:mt-10 mt-6  flex-nowrap items-center justify-center  "
              onClick={moveNext}
            >
              <span className="min-w-[9rem] mt-1 text-xl xl:text-2xl text-white font-epilogue ">
                Start Test
              </span>
              <svg
                className=" h-8 w-8  md:h-12 md:w-12 "
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9829 24.3637C12.984 24.3637 12.1743 25.1735 12.1743 26.1724C12.1743 27.1713 12.984 27.981 13.9829 27.981V24.3637ZM40.2969 27.4513C41.0033 26.745 41.0033 25.5998 40.2969 24.8934L28.7867 13.3832C28.0804 12.6769 26.9352 12.6769 26.2289 13.3832C25.5225 14.0895 25.5225 15.2347 26.2289 15.941L36.4602 26.1724L26.2289 36.4037C25.5225 37.11 25.5225 38.2552 26.2289 38.9615C26.9352 39.6678 28.0804 39.6678 28.7867 38.9615L40.2969 27.4513ZM13.9829 27.981H39.018V24.3637H13.9829V27.981Z"
                  fill="white"
                />
              </svg>
            </button>
        </div>

        <div className="grow-0 shrink grid place-content-center sm:w-3/12 w-6/12  pr-0 sm:pr-14">
          <img src={lemonBanner} alt="lemon" />
        </div>
      </section>

      <section className="pt-0 max-w-screen-xl mx-auto ">
        <h1 className=" text-3xl md:text-3xl xl:text-4xl font-epilogue font-bold md:leading-relaxed xl:leading-snug  text-center max-w-screen-sm mx-auto mt-10  px-4 ">
          There are 5 money personalities, which one are you?
        </h1>
        <div className="flex lg:flex-nowrap flex-wrap gap-10 justify-around items-center max-w-screen-xl mx-auto px-3 my-10 ">
          <div className="basis-96 grow-0 shrink grid place-content-center place-items-center gap-3 py-3 ">
            <img src={emoji1} alt="" />
            <h3 className="text-center text-xl md:text-2xl xl:text-2xl font-medium font-epilogue md:leading-relaxed xl:leading-snug ">
              The Idealist
            </h3>
            <span className="text-base md:text-lg lg:text-sm font-epilogue md:leading-relaxed lg:leading-snug min-w-full text-center px-2">
              You're aware that money is a necessary part of life.
            </span>
          </div>
          <div className="basis-96 grow-0 shrink grid place-content-center place-items-center gap-3 my-3 ">
            <img src={emoji2} alt="" />
            <h3 className="text-center  text-xl md:text-2xl xl:text-2xl font-medium font-epilogue md:leading-relaxed xl:leading-snug ">
              The Stockpiler
            </h3>
            <span className=" text-base  md:text-lg lg:text-sm font-epilogue md:leading-relaxed lg:leading-snug min-w-full text-center px-2">
              You're aware that money is a necessary part of life.
            </span>
          </div>
          <div className="basis-96 grow-0 shrink grid place-content-center place-items-center gap-3 my-3 ">
            <img src={emoji3} alt="" />
            <h3 className="text-center  text-xl md:text-2xl xl:text-2xl font-medium font-epilogue md:leading-relaxed xl:leading-snug ">
              The Hedonist
            </h3>
            <span className=" text-base  md:text-lg lg:text-sm font-epilogue md:leading-relaxed lg:leading-snug min-w-full text-center px-2">
              You're aware that money is a necessary part of life.
            </span>
          </div>
          <div className="basis-96 grow-0 shrink grid place-content-center place-items-center gap-3 my-3 ">
            <img src={emoji4} alt="" />
            <h3 className="text-center  text-xl md:text-2xl xl:text-2xl font-medium font-epilogue md:leading-relaxed xl:leading-snug ">
              The Stockpiler
            </h3>
            <span className=" text-base  md:text-lg lg:text-sm font-epilogue md:leading-relaxed lg:leading-snug min-w-full text-center px-2">
              You're aware that money is a necessary part of life
            </span>
          </div>
          <div className="basis-96 grow-0 shrink grid place-content-center place-items-center gap-3 my-3 ">
            <img src={emoji5} alt="" />
            <h3 className="text-center  text-xl md:text-2xl xl:text-2xl font-medium font-epilogue md:leading-relaxed xl:leading-snug ">
              The Hedonist
            </h3>
            <span className=" text-base  md:text-lg lg:text-sm font-epilogue md:leading-relaxed lg:leading-snug min-w-full text-center px-2">
              You're aware that money is a necessary part of life.
            </span>
          </div>
        </div>
        <div className="place-content-center pb-10 pt-20 grid ">
          {/* <button
            className="hidden md:grid  bg-gradient-to-r from-btnLeft to-btnRight hover:shadow-lg py-2  md:py-4  px-6 lg:px-10 rounded-lg mt-1 "
            onClick={moveNext}
          >
            <span className=" w-full text-2xl xl:text-3xl text-white font-epilogue whitespace-nowrap mt-1">
              Find Out Now
            </span>
          </button> */}
        </div>

        <div className="fixed top-auto right-0 left-0 bottom-0 h-20 bg-red grid place-content-center md:hidden ">
          <button
            className=" md:px-6 px-4 rounded-lg  flex flex-nowrap items-center justify-center  "
            onClick={moveNext}
          >
            <span className="min-w-[9rem] mt-1 text-2xl  text-white font-epilogue">
              Start Test
            </span>
            <svg
              className=" h-8 w-8  md:h-12 md:w-12"
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9829 24.3637C12.984 24.3637 12.1743 25.1735 12.1743 26.1724C12.1743 27.1713 12.984 27.981 13.9829 27.981V24.3637ZM40.2969 27.4513C41.0033 26.745 41.0033 25.5998 40.2969 24.8934L28.7867 13.3832C28.0804 12.6769 26.9352 12.6769 26.2289 13.3832C25.5225 14.0895 25.5225 15.2347 26.2289 15.941L36.4602 26.1724L26.2289 36.4037C25.5225 37.11 25.5225 38.2552 26.2289 38.9615C26.9352 39.6678 28.0804 39.6678 28.7867 38.9615L40.2969 27.4513ZM13.9829 27.981H39.018V24.3637H13.9829V27.981Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </section>
    </>
  );
};
export default LandingPage;
