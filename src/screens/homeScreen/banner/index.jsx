<<<<<<< HEAD
import ReactPlayer from "react-player";

const Banner = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("this is form submit handler ");
  };
  return (
    <section className=" bg-cream">
      <div className="px-3 md:w-11/12 mx-auto flex items-center justify-around gap-y-10 gap-x-4 lg:flex-row flex-col min-h-[45rem]  py-16 bg-cream">
        <div className=" grow-[3] shrink flex flex-col gap-4  justify-center max-w-screen-lg  lg:px-3 ">
          <h1 className=" text-3xl md:text-4xl xl:text-5xl font-epilogue font-bold md:leading-relaxed xl:leading-snug">
            Got Spare Change? <br />
            Let&apos;s grow it{" "}
            <span className=" text-red "> automatically!</span>
          </h1>
          <div className=" text-gray text-xl md:text-2xl xl:text-3xl font-epilogue max-w-screen-md  ">
=======
import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Banner2 from "../banner2";
// import second from '../../../assets/icons/'
import "./style.css"

const Banner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);
  const [status, setStatus] = useState(0);
  const [tabs, setTabs] = useState(0);
  const [showHowItWork, setShowHowItWork] = useState(false);
  const [popupTerms, setPopupTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const Terms = () => {
    return (
      <div className="terms-popup-wrapper z-10 bg-white flex justify-center items-center">
        <div className="terms-popup  px-14 py-8 sm:py-5 sm:px-10  flex justify-center items-center">
          <p className="text-black hover:text-red" onClick={() => setPopupTerms(false)}>X</p>

          <ul className="list-disc font-epilogue text-sm text-black"><span className="text-lg font-semibold">Terms and Conditions</span>
            <li>Every time your family/ friends sign up with your shared referral link and becomes a new RuDo member by
              setting up a RuDo Wealth account in accordance with the below eligibility criteria, you and your friend will get AED50 in your RuDo Wealth accounts. Eligibility</li>
            <li>Referral codes must be used during the early sign up and on-boarding process, and cannot be added retroactively.</li>
            <li>Only when your friend funds his/her account with the minimum investment of AED20 into their portfolio, the referral amount will be added to both of your accounts within 30 days.</li>
            <li>Clients who receive a referral bonus must keep it in their account for 90 days, otherwise it may be deducted from their final withdrawal amount.</li>
            <li>The referral program is available exclusively to those who are residing in the UAE.</li>
          </ul>

        </div>
      </div>
    )
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
    <section className=" bg-cream ">
      <div className="px-3 md:w-11/12 mx-auto flex justify-around gap-y-10 gap-x-6 lg:flex-row flex-col py-16 bg-cream">
        <div className=" grow-[3] shrink flex flex-col gap-4  justify-center max-w-screen-lg lg:px-3">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-epilogue font-bold md:leading-relaxed xl:leading-snug">
            Got Spare Change? <br />
            Let&apos;s grow it{" "}
            <span className=" text-red "> automatically! </span>
          </h1>
          <div className=" text-gray text-xl md:text-xl xl:text-xl font-epilogue max-w-screen-md  ">
>>>>>>> cce52e9198ceac4abbdc8863ed47232fd6879385
            Start small but steady! With RuDo, build a Global ETF portfolio and
            let us grow your spare change into a million bucks in a fun and
            rewarding way.
          </div>
<<<<<<< HEAD
          <form
            onSubmit={handleSubmit}
            className=" font-epilogue flex items-center justify-center gap-4 md:flex-row flex-col bg-orange bg-opacity-10 py-4 px-6  rounded-lg my-4  max-w-screen-sm  "
          >
            <input
              type="text"
              size="3"
              placeholder="Name"
              className="px-4 pt-2 pb-1 font-epilogue text-gray md:text-lg shadow-inputShadow outline-none rounded-md flex-1  w-full"
            />
            <input
              type="text"
              placeholder="Email Address"
              size="3"
              className="px-4 pt-2 pb-1 font-epilogue text-gray md:ext-lg shadow-inputShadow outline-none rounded-md flex-1 w-full"
            />
            <button
              type="submit"
              className="bg-red hover:outline-red  outline  outline-offset-2 outline-2 font-epilogue text-lg text-white font-bold pt-2 pb-1 grid place-content-center px-4 rounded-full min-w-[10rem]"
            >
              Start Today
            </button>
          </form>
        </div>
        <div className="grow-[2] shrink hidden place-content-center xl:grid basis-96 ">
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
      </div>
=======

          <div className="bg-orange bg-opacity-10 font-epilogue max-w-screen-sm  ">
            <div className="viral-loops-wrapper mt-4">
              <h1 className="font-epilogue px-5 text-center py-3 font-semibold">Signup now to join our waitlist and get AED 50</h1>
              <div data-vl-widget="embedForm" ></div>
            </div>
          </div>

          <div className="font-epilogue">
            <h3 className="cursor-pointer hover:text-red inline transition-all text-sm underline  underline-offset-1"
             onClick={() => popupTerms ? setPopupTerms(false) : setPopupTerms(true)} >Terms and Conditions</h3>
          </div>
        </div>

        <div className="flex items-center">
          <div className="grow-[2] place-content-center shrink hidden xl:grid basis-[410px] ">
            <ReactPlayer
              url="https://www.dropbox.com/s/zptldk4pcotquq2/Spare%20Change%20Investment.mp4?dl=0"
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

      <div className="mb-10">
        <h1 className="text-center text-2xl font-vanio-bold" >Invite Friends, Give AED 50 and Get AED 50</h1>
        <h1 className="text-center text-lg" >Get more rewards with every milestone you reach upto AED 7,500 by inviting more friends when they start investing with RuDo.</h1>
      </div>

      <div data-vl-widget="milestoneWidget"></div>

      <div className="grow-[2] shrink place-content-center grid xl:hidden shrink-1 basis-[410px]">
        <ReactPlayer
          url="https://www.dropbox.com/s/zptldk4pcotquq2/Spare%20Change%20Investment.mp4?dl=0"
          muted={true}

          loop={true}
          playing={true}          
          controls={true}
          height={330}
          width={330}
        />
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
          <div className="how-it-works-popup origin-center bg-cream">
            <Banner2 setShowHowItWork={setShowHowItWork} />
          </div> : ""
      }

      {
        popupTerms ? <Terms /> : ""
      }
>>>>>>> cce52e9198ceac4abbdc8863ed47232fd6879385
    </section>
  );
};
export default Banner;
