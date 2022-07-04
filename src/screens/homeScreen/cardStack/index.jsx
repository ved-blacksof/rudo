import React  from "react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import EmailFormScreen from "../../formScreen/emailForm";
import { Formik } from "formik";
import "./styles.css";
import { useDispatchContext } from "../../../context";
import emailjs from "emailjs-com";
import {ImCross} from 'react-icons/im'

const CardStack = () => {
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(0);
  const [joinWaitlist, setJoinWaitlist] = useState(false);



  const btnCb = () => {
    if (popup) {
      console.log(popup);
      setPopup(false);
    } else setPopup(true);
  };

  // const handleSubmit = (e) => {

  //   if (name.length > 2 && email.length > 2) {
  //     alert(`Congratulations ${name}! You have joined waitlist successfully`)
  //     setPopup(false)
  //     setEmail("");
  //     setName("")
  //   }
  //   else {
  //     alert("Please fill all the fields")

  //   }
  // }

  // formik
  const formRef = useRef();
  const { moveNext } = useDispatchContext();
  const [isLoading, toggleLoading] = useState(false);
  const initalFormState = {
    email: "",
    name: "",
  };

  const ErrorIndicator = ({ data }) => {
    return (
      <div className=" px-6 flex  items-center gap-3  justify-center flex-nowrap bg-red bg-opacity-40 mr-auto pb-2 pt-2 rounded-md ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 32.002 32"
          fill="red"
        >
          <path d="M2.062 32h27.812a2 2 0 0 0 1.766-2.942l-13.876-26A1.997 1.997 0 0 0 16.002 2H16c-.738 0-1.414.406-1.762 1.056L.3 29.056a2.004 2.004 0 0 0 .046 1.972A2.005 2.005 0 0 0 2.062 32zM16 24a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 24zm-2-3.968v-8a2 2 0 0 1 4 0v8a2 2 0 0 1-4 0z" />
        </svg>
        <p className="text-xs font-epilogue text-dark font-bold tracking-wider pt-1">
          {data}
        </p>
      </div>
    );
  };

  const renderError = (errors) => {
    if (errors.name && errors.email)
      return <ErrorIndicator data="Invalid Email & Name" />;
    else if (errors.name) return <ErrorIndicator data="Invalid Name" />;
    else if (errors.email) return <ErrorIndicator data="Invalid Email" />;
    else return;
  };

  const submitHandler = async (values, { resetForm }) => {
    toggleLoading(true);
    try {
      // emailjs.init("user_YW47ZYWhszMIdjdqUtsPJ");
      // emailjs
      //   .send(
      //     "rudo-email",
      //     "template_62pl0id",
      //     values,
      //     "user_YW47ZYWhszMIdjdqUtsPJ"
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text, "asdfdf");
      //       swal({
      //         title: "Congratulations",
      //         text: "We will get back to you soon.",
      //         icon: "success",
      //         confirm: {
      //           text: "OK"
      //         }
      //       })
      //       setPopup(false)

      //     },
      //     (error) => {
      //       swal("Something went wrong!");
      //       console.log(error.text);
      //     }
      //   );
      console.log(values, "dddd");
    } catch (err) {
      console.log(err);
    }
    resetForm();
  };

  const validator = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email";
    }
    if (values.name === "") {
      errors.name = "Name";
    }
    return errors;
  };

  const JoinWaitlist = () => {
    if (joinWaitlist) {
      setJoinWaitlist(false)
    }
    else setJoinWaitlist(true)
  };



  useEffect(() => {
    // to be  deprecated in following builds
    let sliderImagesBox = document.querySelectorAll(".cards-box ");
    sliderImagesBox.forEach((el) => {
      let imageNodes = el.querySelectorAll(".card:not(.hide)");
      let arrIndexes = [];
      (() => {
        let start = 0;
        while (imageNodes.length > start) {
          arrIndexes.push(start++);
        }
      })();

      let setIndex = (arr) => {
        for (let i = 0; i < imageNodes.length; i++) {
          imageNodes[i].dataset.slide = arr[i];
        }
      };
      arrIndexes.unshift(arrIndexes.pop());
      setIndex(arrIndexes);

      // el.addEventListener("click", (event) => {
      //   event.stopPropagation();
      //   if (event.target.classList.contains("btn")) {
      //     return btnCb();
      //   }
      //   arrIndexes.unshift(arrIndexes.pop());
      //   setIndex(arrIndexes);
      // });
      setInterval(() => {
        arrIndexes.unshift(arrIndexes.pop());
        setIndex(arrIndexes);
      }, [4000]);
    });
  }, []);

  return (
    <>
      {/* {joinWaitlist ? <PopupFun title="hi" /> : ""} */}

      <div className={`  ${joinWaitlist ? "fixed top-0 left-0 right-2 flex justify-center items-center w-screen h-screen z-10 bg-slate-600 bg-opacity-50 opacity-[1]" : "hidden opacity-0 transition-all duration-100"}`}>
        <div className="viral-loops-formss relative p-8 flex items-center justify-center">

        <ImCross className="absolute top-5 right-5 block font-bold cursor-pointer hover:text-black text-red" onClick={JoinWaitlist} />
         
          
          {/* VIRAL Loops */}
          <div data-vl-widget="embedForm" className="z-[100]"></div>
          <div class="absolute top-0 left-0 right-0 bottom-0 my-auto grid place-content-center z-[0] h-16 ">
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
                stroke-width="10"
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


      {/* {
        popup ?
          <EmailFormScreen /> : ""
      } */}

      <div className="cards-box md:w-11/12 px-4 mx-auto flex items-center justify-center mt-32 py-48 md:py-80 lg:py-80 xl:py-80 ">
        <div className="card item-1  md:w-[40rem] w-full md:min-h-[35rem] min-h-[20rem]  rounded-xl mx-auto ">
          <div className=" px-8 py-8 xl:px-20 xl:py-20 flex  flex-col flex-nowrap items-start justify-start gap-4">
            <h1 className=" text-3xl text-white font-vanio  md:text-4xl xl:text-5xl max-w-screen-sm">
              Saving and investing was never so fun and breezy!
            </h1>
            <p className="text-lg text-white font-epilogue md:text-xl xl:text-2xl max-w-screen-sm ">
              Invest to load your treasure chest in a fun way!
            </p>

            <button onClick={JoinWaitlist} className="sm:pb-2 pb-1 pt-1 sm:pt-3 mt-3 sm:px-10 px-8 text-lg xl:text-xl text-white font-epilogue border-2 bg-red rounded-xl transition-colors duration-300 cursor-pointer  ">
              Join Waitlist</button>
          </div>
        </div>

        <div className="card item-2  md:w-[40rem] w-full md:min-h-[35rem] min-h-[20rem] rounded-xl mx-auto ">
          <div className=" px-8 py-8 xl:px-20 xl:py-20 flex  flex-col flex-nowrap items-start justify-start gap-4">
            <h1 className=" text-3xl text-white font-vanio  md:text-4xl xl:text-5xl max-w-screen-sm ">
              Invest small, earn big!
            </h1>
            <p className="text-lg text-white font-epilogue  md:text-xl xl:text-2xl max-w-screen-sm">
              Invest smartly in your best-fit portfolios and earn exciting
              rewards for it!
            </p>
            <button onClick={JoinWaitlist} className="sm:pb-2 pb-1 pt-1 sm:pt-3 mt-3 sm:px-10 px-8 text-lg xl:text-xl text-white font-epilogue border-2 bg-red rounded-xl transition-colors duration-300 cursor-pointer  ">
              Join Waitlist</button>
          </div>
        </div>

        <div className="card item-3 md:w-[40rem] w-full xl:w-[75rem] md:min-h-[35rem] min-h-[20rem] rounded-xl mx-auto">
          <div className=" px-8 py-8 xl:px-20 xl:py-20 flex  flex-col flex-nowrap items-start justify-start gap-4">
            <h1 className=" text-3xl text-white font-vanio  md:text-4xl xl:text-5xl max-w-screen-sm">
              Binge-investing! <br />
              Yes, we are making it a norm!
            </h1>
            <p className="text-lg text-white font-epilogue  md:text-xl xl:text-2xl max-w-screen-sm">
              Explore fun experiences that set you out to start building your
              wealth!
            </p>

            <button onClick={JoinWaitlist} className="sm:pb-2 pb-1 pt-1 sm:pt-3 mt-3 sm:px-10 px-8 text-lg xl:text-xl text-white font-epilogue border-2 bg-red rounded-xl transition-colors duration-300 cursor-pointer  ">
              Join Waitlist</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStack;
