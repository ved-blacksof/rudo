import React from "react";

import { useState, useRef } from "react";
import FormHeader from "./formHeader";
import trophy from "../../assets/formPage/trophyBg.png";
import { Formik } from "formik";
import emailjs from "emailjs-com";
import LoadingState from "./loadingState";

import { useDispatchContext, useFormContext } from "../../context";

const EmailFormScreen = () => {
  const formRef = useRef();
  const { moveNext } = useDispatchContext();
  const { ansData } = useFormContext();
  console.log(ansData);
  const [isLoading, toggleLoading] = useState(false);
  const initalFormState = {
    email: "",
    name: "",
  };

  const ErrorIndicator = ({ data }) => {
    return (
      <div className=" px-6 flex  items-center gap-3  justify-center flex-nowrap bg-red bg-opacity-40 mr-auto pb-2 pt-3 rounded-lg ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 32.002 32"
          fill="red"
        >
          <path d="M2.062 32h27.812a2 2 0 0 0 1.766-2.942l-13.876-26A1.997 1.997 0 0 0 16.002 2H16c-.738 0-1.414.406-1.762 1.056L.3 29.056a2.004 2.004 0 0 0 .046 1.972A2.005 2.005 0 0 0 2.062 32zM16 24a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 24zm-2-3.968v-8a2 2 0 0 1 4 0v8a2 2 0 0 1-4 0z" />
        </svg>
        <p className=" font-epilogue text-dark font-bold tracking-wider pt-1">
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
      //     "service_4y9yybg",
      //     "template_gd6v9ae",
      //     values,
      //     "uJiUvStBvpsEgbU2k"
      //   )
      //   .then(
      //     (result) => {
      //       console.log(result.text);
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
      moveNext();
      console.log(values);
      toggleLoading(true);
    } catch (err) {
      console.log(err);
      toggleLoading(true);
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

  return (
    <>
      {isLoading ? <LoadingState /> : ""}
      <FormHeader />
      <div
        style={{
          height: "calc(100vh - 64px)",
          minHeight: "750px",
        }}
        className="flex flex-col bg-formBg relative"
      >
        <div className="py-3 xl:py-10  max-w-screen-sm   text-center  grid place-content-center px-2 gap-2 mx-auto my-4 xl:mt-6 overflow-auto">
          <h3 className=" font-epilogue text-dark lg:text-2xl text-lg">
            Almost there!
          </h3>
          <h1 className=" font-epilogue font-bold lg:text-4xl text-xl text-dark px-4 ">
            Submit your Name and Email for the result and to get
          </h1>
          <div className="flex flex-nowrap items-center justify-center">
            {/* <img src={trophy} alt="trophy" className="mb-1" /> */}
            <h1 className=" text-green font-epilogue lg:text-4xl text-xl font-bold  capitalize ">
              Give AED 50 and Get AED 50
            </h1>
          </div>

          <Formik
            initialValues={initalFormState}
            validate={(values) => validator(values)}
            onSubmit={(values, actions) => submitHandler(values, actions)}
            validateOnChange={false}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col px-3 pt-2 gap-3"
              >
                <input
                  type="text"
                  placeholder="First Name"
                  className={` ${
                    errors.name ? "border-red" : "border-gray border-opacity-50"
                  }  bg-hover border-2  focus:border-green outline-none font-epilogue pt-4 pb-3  px-3  text-base  rounded-lg xl:text-lg`}
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className={` ${
                    errors.email
                      ? "border-red"
                      : "border-gray border-opacity-50"
                  }  bg-hover border-2  focus:border-green outline-none font-epilogue pt-4 pb-3  px-3  text-base  rounded-lg xl:text-lg`}
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                />
                {renderError(errors)}

                <div className="flex justify-end  ">
                  <button
                    type="submit"
                    className="font-epilogue px-20 pt-5 pb-3 text-white bg-dark text-xl xl:text-2xl rounded-lg hover:bg-opacity-80"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {/* <FormProgress /> */}
    </>
  );
};
export default EmailFormScreen;

/*

  <div className="w-full flex justify-end px-2 mt-7 ">
                  <button
                    type="submit"
                    className="px-[4rem] uppercase tracking-widest hero-btn text-red hover:text-white hover:bg-red border-2 border-red "
                  >
                    submit
                  </button>
                </div>

*/
