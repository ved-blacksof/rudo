import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Banner2 from "../banner2";
import spareVideo from "../../../assets/Spare_Change_Investment.mp4";
// import second from '../../../assets/icons/'
import "./style.css";

const Banner = () => {
  const [popup, setPopup] = useState(false);
  const [status, setStatus] = useState(0);
  const [showHowItWork, setShowHowItWork] = useState(false);
  const [popupTerms, setPopupTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const Terms = () => {
    return (
      <div className="terms-popup-wrapper z-10 bg-white flex justify-center items-center">
        <div className="terms-popup  px-14 py-8 sm:py-5 sm:px-10  flex justify-center items-center">
          <p
            className="text-black hover:text-red"
            onClick={() => setPopupTerms(false)}
          >
            X
          </p>

          <ul className="list-disc font-epilogue text-sm text-black">
            <span className="text-lg font-semibold">Terms and Conditions</span>
            <li>
              Every time your family/ friends sign up with your shared referral
              link and becomes a new RuDo member by setting up a RuDo Wealth
              account in accordance with the below eligibility criteria, you and
              your friend will get AED50 in your RuDo Wealth accounts.
              Eligibility
            </li>
            <li>
              Referral codes must be used during the early sign up and
              on-boarding process, and cannot be added retroactively.
            </li>
            <li>
              Only when your friend funds his/her account with the minimum
              investment of AED20 into their portfolio, the referral amount will
              be added to both of your accounts within 30 days.
            </li>
            <li>
              Clients who receive a referral bonus must keep it in their account
              for 90 days, otherwise it may be deducted from their final
              withdrawal amount.
            </li>
            <li>
              The referral program is available exclusively to those who are
              residing in the UAE.
            </li>
          </ul>
        </div>
      </div>
    );
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

  return (
    <section>
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

          <div className="grow-[2] shrink place-content-center grid lg:hidden shrink-1 mt-7 sm:mt-20">
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

          <div className="bg-orange rounded-md px-2 bg-opacity-10 font-epilogue max-w-screen-sm mt-8 sm:mt-5">
            <div className="viral-loops-wrapper mt-4">
              {/* <h1 className="font-epilogue px-5 text-center py-3 font-semibold">Signup now to join our waitlist and get AED 50</h1> */}
              <div data-vl-widget="embedForm"></div>
            </div>
          </div>

          <div className="font-epilogue">
            <h3
              className="cursor-pointer hover:text-red inline transition-all text-sm underline  underline-offset-1"
              onClick={() =>
                popupTerms ? setPopupTerms(false) : setPopupTerms(true)
              }
            >
              Terms and Conditions
            </h3>
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

      <div className="mb-2 sm:mb-10 sm:mt-24 mt-0 px-3">
        <h1 className="sm:text-center text-xl sm:text-3xl font-semibold font-epilogue text-darkGreen">
          Give AED 50 and Get AED 50
        </h1>
        <h1 className="sm:text-center text-sm sm:text-xl mt-0 sm:mt-5 font-epilogue max-w-lg mx-auto leading-5 sm:leading-7">
          Get more rewards with every milestone you reach upto AED 7,500 by
          inviting more friends when they start investing with RuDo.
        </h1>
      </div>

      <div data-vl-widget="milestoneWidget"></div>

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

      {showHowItWork ? (
        <div className="how-it-works-popup origin-center bg-cream">
          <Banner2 setShowHowItWork={setShowHowItWork} />
        </div>
      ) : (
        ""
      )}

      {popupTerms ? <Terms /> : ""}
    </section>
  );
};
export default Banner;
