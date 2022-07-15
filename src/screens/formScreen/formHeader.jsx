import logoIcon from "../../assets/icons/logo.svg";
import chevronLeft from "./svgs/chevronDesktop.svg";
import React from "react";
import { useFormContext } from "../../context";

const FormHeader = ({ prevHandler, elemRef, moveNext, movePrev }) => {
  // console.log(elemRef)
  const { stage } = useFormContext();
  return (
    <header className=" bg-white  sticky top-0 left-0 right-0 z-[100] ">
      <div className="absolute px-6 place-content-center h-[3rem] my-[0.5rem] grid">
        <button onClick={movePrev} ref={elemRef} className="hidden">
          <img src={chevronLeft} alt="arrow-left" />
        </button>
      </div>
      <nav className="relative h-[4rem] py-2 px-3 lg:w-11/12 mx-auto  flex justify-between gap-10 items-center max-w-screen-2xl">
        {stage === 0 ? (
          <button
            className="absolute sm:visible invisible top-0 right-0 bg-gradient-to-r from-btnLeft to-btnRight hover:shadow-lg py-2 md:py-0 px-3 rounded-lg xl:mt-2 mt-3 flex flex-nowrap items-center justify-center"
            onClick={moveNext}
          >
            <span className="min-w-[8rem] mt-1 text-xl xl:text-lg text-white font-epilogue">
              Start Test
            </span>

            <svg
              className=" h-7 w-7  md:h-12 md:w-8 "
              viewBox="0 0 53 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9829 24.3637C12.984 24.3637 12.1743 25.1735 12.1743 26.1724C12.1743 27.1713 12.984 27.981 13.9829 27.981V24.3637ZM40.2969 27.4513C41.0033 26.745 41.0033 25.5998 40.2969 24.8934L28.7867 13.3832C28.0804 12.6769 26.9352 12.6769 26.2289 13.3832C25.5225 14.0895 25.5225 15.2347 26.2289 15.941L36.4602 26.1724L26.2289 36.4037C25.5225 37.11 25.5225 38.2552 26.2289 38.9615C26.9352 39.6678 28.0804 39.6678 28.787 38.9615L40.2969 27.4513ZM13.9829 27.981H39.018V24.3637H13.9829V27.981Z"
                fill="white"
              />
            </svg>
          </button>
        ) : (
          ""
        )}
        <img src={logoIcon} alt="" loading="eager" className=" h-8 xl:h-10" />
      </nav>
    </header>
  );
};

export default FormHeader;
