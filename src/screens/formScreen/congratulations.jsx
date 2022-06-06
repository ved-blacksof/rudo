import FormHeader from "./formHeader";
import Lottie from "react-lottie";
import * as animationData from "./svgs/gift.json";
import trophy from "../../assets/formPage/trophyBg.png";
import { useDispatchContext } from "../../context";
const Congratulations = () => {
  const { moveNext } = useDispatchContext();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <FormHeader />
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
        }}
        className=" flex-col bg-formBg relative py-20 "
      >
        <div className=" h-[60vh]  bg-white max-w-screen-md rounded-2xl mx-auto">
          <Lottie options={defaultOptions} height={250} width={400} />
          <div className="flex flex-nowrap items-center justify-center">
            <img src={trophy} alt="trophy" className="mb-1" />
            <h1 className=" text-green font-epilogue lg:text-4xl text-xl font-bold  capitalize ">
              1 year free subscription
            </h1>
          </div>
          <div className="grid place-content-center ">
            <button
              onClick={moveNext}
              className="  mt-2 bg-red text-white text-xl lg:text-2xl xl:text-3xl pb-3 pt-5 px-10 hover:bg-opacity-80 rounded-2xl font-epilogue "
            >
              Show Result
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Congratulations;