import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import FormProgress from "./formProgress";
import { useDispatchContext, useFormContext } from "../../context/index";
import FormHeader from "./formHeader";

const QuestionsScreen = () => {
  const customBtn = useRef("");
  const defaultPrev = useRef();
  const defaultNext = useRef();
  const { dispatchAns, moveNext } = useDispatchContext();
  const { ansData, quesData } = useFormContext();

  const handleCustomPrev = () => {
    defaultPrev.current.click();
  };
  const handleCustomNext = () => {
    setTimeout(() => {
      defaultNext.current.click();
    }, 200);
  };

  const handleOptionSelect = (qIndex, marks) => {
    dispatchAns({ [qIndex]: marks });
    if (Object.keys(ansData).length === quesData.length - 1) moveNext();
    else handleCustomNext();
  };

  const splideOptions = {
    type: "slide",
    perPage: 1,
    drag: false,
    autoplay: false,
    arrows: true,
    wheel: false,
    pagination: false,
    speed: 1000,
  };

  // useEffect(() => {
  //   window.onbeforeunload = (event) => {
  //     const e = event || window.event;
  //     e.preventDefault();
  //     if (e) {
  //       e.returnValue = "";
  //     }
  //     return "";
  //   };
  // }, []);

  const OptionItem = ({ text, questionIndex, optionIndex, marks }) => {
    return (
      <label className="scale-100 w-auto lg:m-1">
        <input
          type="radio"
          value={optionIndex}
          name={questionIndex}
          defaultChecked={ansData[questionIndex] === marks}
          className=" peer hidden"
          onClick={() => handleOptionSelect(questionIndex, marks)}
        />
        <div className="peer-checked:bg-green  peer-checked:text-white w-auto font-normal xl:text-xl font-epilogue text-dark bg-white bg-opacity-80 hover:border-green border-transparent border-2  pt-3 pb-2 px-4 rounded-full cursor-pointer">
          {text}
        </div>
      </label>
    );
  };

  return (
    <>
      <FormHeader prevHandler={handleCustomPrev} elemRef={customBtn} />
      <div
        style={{
          height: "calc(100vh - 64px)",
          minHeight: "400px",
        }}
        className="flex flex-col bg-formBg relative "
      >
        <div className="grow-0 py-4 xl:py-6 px-3  bg-formBg  xl:flex-1 overflow-auto  min-h-[80vh] ">
          <Splide
            options={splideOptions}
            className="mx-auto xl:px-3 max-w-screen-lg bg-formBg overflow-auto"
          >
            {quesData.map((i, index) => {
              const { icon, description, answers, slug, id: questionId } = i;
              return (
                <SplideSlide
                  key={index}
                  className="flex py-2 lg:py-3 xl:py-5 flex-nowrap px-3  flex-col w-full overflow-auto"
                >
                  <div className="flex flex-nowrap gap-2 items-center max-w-screen-lg">
                    <div className="flex-1  max-w-screen-md">
                      <h2 className=" text-base font-epilogue font-normal text-dark lg:text-2xl">
                        <span className="font-normal font-epilogue">
                          {"Que 0" + (+index + 1) + " / "}
                        </span>
                        {slug}
                      </h2>
                      <h2 className=" text-2xl font-epilogue font-bold text-dark lg:text-4xl">
                        {description}
                      </h2>
                    </div>
                    <img
                      src={icon}
                      className="h-16 w-16 md:h-24 md:w-24 lg:w-30 lg:h-30"
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start h-min flex-wrap  gap-4   xl:mt-4  xl:mb-6 py-4">
                    {answers.map((i) => {
                      return (
                        <OptionItem
                          key={i.id}
                          questionIndex={questionId}
                          optionIndex={i.id}
                          text={i.title}
                          marks={i.id}
                        />
                      );
                    })}
                  </div>
                </SplideSlide>
              );
            })}
            <div className="splide__arrows  hidden  ">
              <button
                ref={defaultPrev}
                className="splide__arrow splide__arrow--prev"
              ></button>
              <button
                ref={defaultNext}
                className="splide__arrow splide__arrow--next"
              ></button>
            </div>
          </Splide>
        </div>
        <FormProgress prevHandler={handleCustomPrev} elemRef={customBtn} />
      </div>
    </>
  );
};

export default QuestionsScreen;
