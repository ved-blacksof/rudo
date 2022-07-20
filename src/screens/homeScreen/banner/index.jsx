import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Banner2 from "../banner2";
import spareVideo from "../../../assets/Spare_Change_Investment.mp4";
// import second from '../../../assets/icons/'
import "./style.css";
import { ImCross } from "react-icons/im";
import TermsAndCondition from "../../../components/TermsAndCondition";

const Banner = () => {
  const [popup, setPopup] = useState(false);
  const [status, setStatus] = useState(0);
  const [showHowItWork, setShowHowItWork] = useState(false);
  const [popupTerms, setPopupTerms] = useState(false);
  const [bottomJoinBtn, setBottomJoinBtn] = useState(false);
  const [joinWaitlist, setJoinWaitlist] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const JoinWaitlist = () => {
    if (joinWaitlist) {
      setJoinWaitlist(false);
    } else setJoinWaitlist(true);
  };

  const Terms = () => {
    return (
      <TermsAndCondition
        setPopupTerms={setPopupTerms}
        JoinWaitlist={JoinWaitlist}
      />
    );
  };

  const PopupFun = ({ title, subtitle }) => {
    return (
      <div className="banner__popup z-[1000000] d">
        <div className="fixed  z-10 inset-0 overflow-y-auto bg-white">
          <div className="flex items-end  sm:items-center justify-center min-h-full p-4 text-center sm:p-0 ">
            <div className="relative bg-red rounded-lg text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full ">
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-2 sm:text-left">
                    <h3
                      className="text-xl leading-6 font-bold font-epilogue text-white"
                      id="modal-title"
                    >
                      {title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm font-epilogue text-white">
                        {subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ">
                <button
                  type="button"
                  onClick={() => setPopup(false)}
                  className="w-full inline-flex justify-center rounded-md border-2  px-4 py-2  text-base font-medium text-white  hover:bg-white hover:text-black hover:border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm "
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleScroll = () => {
    const currOffest = window.pageYOffset;
    const currHeight = window.innerHeight;

    if (currOffest > currHeight) {
      setBottomJoinBtn(true);
    } else {
      setBottomJoinBtn(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="">
      <div className="px-3 md:w-11/12 mx-auto flex justify-between lg:justify-around gap-y-10 gap-x-6 lg:flex-row flex-col py-5 sm:py-16">
        <div className="grow-[3] shrink flex flex-col  justify-center max-w-screen-lg lg:px-3 ">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-epilogue font-bold md:leading-relaxed xl:leading-snug leading-7 text-center sm:text-left">
            Got Spare Change? <br />
            Let&apos;s grow it{" "}
            <span className=" text-red "> automatically! </span>
          </h1>
          <div className=" text-gray text-sm md:text-xl xl:text-xl  font-epilogue max-w-screen-md text-center sm:text-left leading-5 mt-1">
            Start small but steady! With RuDo, build a Global ETF portfolio and
            let us grow your spare change into a million bucks in a fun and
            rewarding way.
          </div>

          <div className=" grow-[2] shrink place-content-center grid lg:hidden shrink-1 mt-7 sm:mt-20">
            <div className="video-wrapper">
              <ReactPlayer
                url={spareVideo}
                muted={true}
                playing={true}
                loop={true}
                controls={true}
                height={300}
                width={300}
                playsinline={true}
              />
            </div>
          </div>

          <div className="viral-loops-wrapper rounded-md sm:p-0 p-2 bg-opacity-10 font-epilogue max-w-screen-xs mt-8 sm:mt-5 ">
            {/* POPUP */}
            <div
              className={`  ${
                joinWaitlist
                  ? "fixed top-0 left-0 right-2 flex justify-center items-center w-screen h-screen z-10 bg-slate-600 bg-opacity-50"
                  : "hidden"
              }`}
            >
              <div className="viral-loops-formss relative p-5 flex items-center justify-center">
                <ImCross
                  className="absolute top-5 right-5 block font-bold cursor-pointer hover:text-black text-red"
                  onClick={JoinWaitlist}
                />

                {/* VIRAL Loops */}

                <div data-vl-widget="embedForm" className="z-[100]"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 my-auto grid place-content-center z-[0] h-16">
                  <svg
                    style={{
                      height: "50px",
                      margin: "auto",
                      background: "none",
                      shapeRendering: "auto",
                    }}
                    width="200px"
                    height="200px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      fill="none"
                      stroke="#e75553"
                      strokeWidth="10"
                      r="35"
                      strokeDasharray="164.93361431346415 56.97787143782138"
                    >
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        repeatCount="indefinite"
                        dur="1s"
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                      ></animateTransform>
                    </circle>
                  </svg>
                </div>
              </div>
            </div>

            <span className="rounded-2xl w-full h-[3px] bg-[#FFDF9E] sm:block hidden"></span>

            <div className="inline-flex justify-center flex-col items-center sm:items-start mt-3">
              <h1 className="font-epilogue  text-center text-black py-1 sm:font-normal font-semibold sm:text-xl sm:px-0 px-8">
                Signup now to join our waitlist and get AED 50
              </h1>
              <button
                onClick={JoinWaitlist}
                className="sm:pb-2 pb-1 sm:pt-3 pt-1 mt-3 sm:px-10 px-8 text-lg xl:text-xl text-white font-epilogue border-2 bg-red rounded-xl transition-colors duration-300 cursor-pointer"
              >
                Join Waitlist
              </button>

              <div className="font-epilogue mt-3 ">
                <h3
                  className="text-[9px] cursor-pointer sm:text-left text-center hover:text-red  transition-all sm:text-xs"
                  onClick={() =>
                    popupTerms ? setPopupTerms(false) : setPopupTerms(true)
                  }
                >
                  *Terms and Conditions
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="video-wrapper grow-[2] place-content-center shrink hidden lg:grid basis-[410px] ">
            <ReactPlayer
              url={spareVideo}
              loop={true}
              playing={true}
              controls={true}
              muted={true}
              height={480}
              width={480}
            />
          </div>
        </div>
      </div>

      <div className="sm:mb-10 sm:mt-24 mt-0 px-3 ">
        <h1 className="sm:text-center text-xl sm:text-3xl font-semibold font-epilogue text-darkGreen">
          Give AED 50 and Get AED 50
        </h1>
        <h1 className="sm:text-center text-sm sm:text-xl mt-0 sm:mt-5 font-epilogue max-w-lg mx-auto leading-5 sm:leading-7">
          Get more rewards with every milestone you reach upto AED 7,500 by
          inviting more friends when they start investing with RuDo.
        </h1>
      </div>

      <div className="sm:mx-auto md:w-11/12 sm:mb-8 sm:px-0 px-5">
        <div
          className="md:w-10/12 sm:mx-auto"
          data-vl-widget="milestoneWidget"
        ></div>
      </div>

      {popup ? (
        status === 200 ? (
          <PopupFun
            title="You have submitted Successfully"
            subtitle="Thankyou for joining us"
          />
        ) : status === 400 ? (
          <PopupFun title="You are already registered" subtitle="Thankyou" />
        ) : (
          <PopupFun
            title="Oops! something went wrong"
            subtitle="Please try after some time"
          />
        )
      ) : (
        ""
      )}

      {popupTerms ? <Terms /> : ""}

      {bottomJoinBtn ? (
        <div
          className="bottomJoinBtn text-white font-epilogue text-xl font-bold transition "
          onClick={JoinWaitlist}
        >
          {" "}
          Join now and Get AED50{" "}
        </div>
      ) : (
        ""
      )}
    </section>
  );
};
export default Banner;
