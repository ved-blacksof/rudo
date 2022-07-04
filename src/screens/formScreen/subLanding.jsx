import React  from "react";
import { useDispatchContext } from "../../context";
import FormHeader from "./formHeader";
const SubLandingPage = () => {
  const { moveNext } = useDispatchContext();
  return (
    <>
      <FormHeader />

      <section className="  landing-page  py-12  lg:py-20 h-[90vh]  mx-auto px-3 bg-white">
        <div className="bg-cream md:w-10/12  mx-auto text-center grid place-content-center place-items-center min-h-full  pt-4 pb-8">
          <h1 className=" text-xl md:text-2xl xl:text-3xl font-epilogue font-bold md:leading-relaxed xl:leading-snug max-w-screen-md pb-8 ">
            But your lemonade might taste different from others considering how
            well you play with the ingredients.
          </h1>
          <h1 className=" text-xl md:text-2xl xl:text-3xl font-epilogue md:leading-relaxed xl:leading-snug max-w-screen-md">
            Same way, your financial wellness depends on how well you manage
            different aspects of your life to secure a financially stable
            future.
          </h1>
          <h1 className=" text-xl md:text-2xl xl:text-3xl font-epilogue md:leading-relaxed xl:leading-snug max-w-screen-md py-2 ">
            Let’s see how your lemonade tastes!
          </h1>
          <button
            className=" bg-gradient-to-r from-btnLeft to-btnRight hover:shadow-lg  py-2  md:py-3 md:px-6 px-4  rounded-lg xl:mt-8 mt-4 flex flex-nowrap items-center justify-center  "
            onClick={moveNext}
          >
            <span className="min-w-[9rem] mt-1 text-xl xl:text-2xl text-white font-epilogue">
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
export default SubLandingPage;
