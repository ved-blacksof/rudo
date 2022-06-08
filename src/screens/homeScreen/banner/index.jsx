import axios from "axios";
import { useState } from "react";
import ReactPlayer from "react-player";

const Banner = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState(false);
  const [status, setStatus] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();


    // const options = {
    //   method: 'POST',
    //   url: 'https://app.viral-loops.com/api/v2/events',
    //   headers: { 'Content-Type': 'application/json' },
    //   data: {
    //     apiToken: 'HFCtRYPzql8crzcv4jDvewuICmk',
    //     params: {
    //       event: 'registration',
    //       user: {
    //         firstname: name,
    //         email: email,
    //         consents: { '1': true }
    //       },
    //     }
    //   }
    // };

    // if (name.length > 2 && email.length > 2) {

    //   axios.request(options)
    //     .then(function (response) {
    //       if (response.data.isNew) {
    //         setPopup(true)
    //         setStatus(200)  //To show the Successfull message
    //         setName("");
    //         setEmail("")
    //       }
    //       else {
    //         setPopup(true)
    //         setStatus(400)  //To show the something went wrong message
    //         setName("");
    //         setEmail("")
    //       }
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //       setStatus(error.isNew)
    //       setPopup(true)
    //       setName("");
    //       setEmail("")
    //     });
    // }
    // else {
    //   alert("Please fill all the fields")
    // }

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
            Start small but steady! With RuDo, build a Global ETF portfolio and
            let us grow your spare change into a million bucks in a fun and
            rewarding way.
          </div>

          <div className="bg-orange bg-opacity-10 py-4 px-6 font-epilogue">

            <div data-vl-widget="embedForm">
            </div>
            {/* <form
              onSubmit={handleSubmit}
              className=" font-epilogue flex items-center justify-center gap-4 md:flex-row flex-col rounded-lg my-4  max-w-screen-sm  "
            >
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="name"
                placeholder="Name"
                autoComplete
                className="px-4 pt-2 pb-1 font-epilogue text-gray md:text-lg shadow-inputShadow outline-none rounded-md flex-1  w-full"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email Address"
                autoComplete
                className="px-4 pt-2 pb-1 font-epilogue text-gray md:ext-lg shadow-inputShadow outline-none rounded-md flex-1 w-full"
              />
              <button
                type="submit"
                className="bg-red hover:outline-red  outline  outline-offset-2 outline-2 font-epilogue text-lg text-white font-bold pt-2 pb-1 grid place-content-center px-4 rounded-full min-w-[10rem]"
              > Start Today</button>

            </form> */}

          </div>
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
      {
        popup ?
          status === 200 ?
            <PopupFun title="You have submitted Successfully" subtitle="Thankyou for joining us" /> :
            status === 400 ?
              <PopupFun title="You are already registered" subtitle="Thankyou" /> :
              <PopupFun title="Oops! something went wrong" subtitle="Please try after some time" />
          : ""
      }
    </section>
  );
};
export default Banner;
