import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import FormProgress from "./formProgress";
import formQues from "../../staticData/formData";
import { useDispatchContext, useFormContext } from "../../context/index";
import FormHeader from "./formHeader";

const QuestionsScreen = () => {
  const customBtn = useRef("");
  const defaultPrev = useRef();
  const defaultNext = useRef();

  const { dispatchAns, moveNext } = useDispatchContext();
  const { ansData } = useFormContext();

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
    console.log(ansData);
    if (Object.keys(ansData).length === formQues.length - 1) moveNext();
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
            {formQues.map((i, index) => {
              const { title, category, options } = i;
              return (
                <SplideSlide
                  key={index}
                  className="flex py-4 lg:py-8 xl:py-10 flex-nowrap px-3  flex-col w-full overflow-auto  "
                >
                  <h1 className=" text-base font-epilogue font-normal text-dark lg:text-2xl ">
                    <span className="font-normal font-epilogue">
                      {"Que 0" + (+index + 1) + " / "}
                    </span>
                    {category}
                  </h1>
                  <h1 className=" text-2xl font-epilogue font-bold text-dark lg:text-4xl">
                    {title}
                  </h1>
                  <div className="flex items-start justify-start h-min flex-wrap  gap-4   xl:mt-4  xl:mb-6 py-4  ">
                    {options.map((i, qIndex) => {
                      return (
                        <OptionItem
                          key={qIndex}
                          questionIndex={index}
                          optionIndex={qIndex}
                          text={i[0]}
                          marks={i[1]}
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
