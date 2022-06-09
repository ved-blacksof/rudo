import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Banner2 from "../banner2";
import "./style.css"

const Banner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);
  const [status, setStatus] = useState(0);
  const [tabs, setTabs] = useState(0);
  const [showHowItWork, setShowHowItWork] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const PopupFun = ({ title, subtitle }) => {
    return (
      <div className="banner__popup z-[1000000]">
        <div className="fixed  z-10 inset-0 overflow-y-auto bg-white">
          <div className="flex items-end  sm:items-center justify-center min-h-full p-4 text-center sm:p-0 ">

            <div className="relative bg-red rounded-lg text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full ">
              <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-2 sm:text-left">
                    <h3 className="text-xl leading-6 font-bold font-epilogue text-white" id="modal-title">{title}</h3>
                    <div className="mt-2">
                      <p className="text-sm font-epilogue text-white">{subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ">
                <button type="button" onClick={() => setPopup(false)}
                  className="w-full inline-flex justify-center rounded-md border-2  px-4 py-2  text-base font-medium text-white  hover:bg-white hover:text-black hover:border-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm ">
                  OK</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }


  useEffect(() => {

  }, [tabs])


  return (
    <section className=" bg-cream">
      <div className="px-3 md:w-11/12 mx-auto flex  justify-around gap-y-10 gap-x-4 lg:flex-row flex-col min-h-[45rem]  py-16 bg-cream">
        <div className=" grow-[3] shrink flex flex-col gap-4  justify-center max-w-screen-lg  lg:px-3 ">
          <h1 className=" text-3xl md:text-4xl xl:text-5xl font-epilogue font-bold md:leading-relaxed xl:leading-snug">
            Got Spare Change? <br />
            Let&apos;s grow it{" "}
            <span className=" text-red "> automatically! </span>
          </h1>
          <div className=" text-gray text-xl md:text-xl xl:text-xl font-epilogue max-w-screen-md  ">
            Start small but steady! With RuDo, build a Global ETF portfolio and
            let us grow your spare change into a million bucks in a fun and
            rewarding way.
          </div>

          <div className="bg-orange bg-opacity-10 py-4 px-6 font-epilogue ">

            <div className="tabs-wrapper">
              <h4 className={tabs === 0 ? "tab active " : "tab"} onClick={() => setTabs(0)}>Signup</h4>
              <h4 className={tabs === 1 ? "tab active " : "tab"} onClick={() => setTabs(1)}>Milestones</h4>
              <h4 className={tabs === 2 ? "tab active " : "tab"} onClick={() => setTabs(2)}>Referral Counts</h4>
            </div>

            <div className="viral-loops-wrapper">
              <div className={tabs === 0 ? "embed-form height-100" : "embed-form height-0 "}>
                <div data-vl-widget="embedForm"></div>
              </div>
              <div className={tabs === 1 ? " height-100" : "embed-form height-0 "}>
                <div data-vl-widget="milestoneWidget"></div>
              </div>
              <div className={tabs === 2 ? " height-100" : "embed-form height-0 "}>
                <div data-vl-widget="referralCountWidget"></div>
              </div>

            </div>

          </div>
        </div>
        <div>
          <div className="grow-[2] shrink hidden xl:grid basis-96 ">
            <ReactPlayer
              url="https://youtu.be/fE-2h3stIhw"
              muted={true}
              loop={true}
              playing={true}
              controls={true}
              height={480}
              width={480}
            />
          </div>
          <div className=" grow-[2]  shrink  place-content-center grid xl:hidden shrink-1 basis-96">
            <ReactPlayer
              url="https://youtu.be/fE-2h3stIhw"
              muted={true}
              loop={true}
              playing={true}
              controls={true}
              height={330}
              width={330}
            />
          </div>

          <div className="refer-card text-white p-4 rounded-lg text-xl bg-red font-epilogue">
            <h1>Refer & Earn AED50</h1>
            <h4 className="text-xs">Refer a friend and get AED50 added in your and your friends RuDo Account!</h4>
            <div onClick={() => { showHowItWork ? setShowHowItWork(false) : setShowHowItWork(true) }}
                 className="work-butn font-bold transition-all rounded-lg  text-white text-xs p-2 pt-3 bg-cyan cursor-pointer">
              How it works?
              <p className="btn-back"></p>
            </div>
          </div>

        </div>
      </div>
      {
        popup ?
          status === 200 ?
            <PopupFun title="You have submitted Successfully" subtitle="Thankyou for joining us" /> :
            status === 400 ?
              <PopupFun title="You are already registered" subtitle="Thankyou" /> :
              <PopupFun title="Oops! something went wrong" subtitle="Please try after some time" />
          : ""
      }
      {
        showHowItWork ?
          <div className="how-it-works-popup origin-center ">
            <Banner2 setShowHowItWork={setShowHowItWork} />
          </div> : ""
      }
    </section>
  );
};
export default Banner;
