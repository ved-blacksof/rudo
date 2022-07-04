import React  from "react";
import FormHeader from "./formHeader";

import { useFormContext } from "../../context";
import { useState, useEffect } from "react";
import emoji1 from "../../assets/formPage/Emoji01.svg";

const ReportDetail = () => {
  const [data, setData] = useState(0);
  const { ansData } = useFormContext();

  useEffect(() => {
    const marks = Object.keys(ansData).reduce((a, c) => a + ansData[c], 0);
    const score = Math.floor((marks / 80) * 100);
    setData(score);
  }, [ansData]);

  return (
    <div div className=" overflow-x-hidden">
      <FormHeader />
      <div
        style={{
          minHeight: "100vh",
        }}
        className=" bg-formBg relative py-20 px-3 "
      >
        <div
          style={{
            backgroundImage: `linear-gradient( to right  , #4ABE9A 0% , #4ABE9A ${data}% , #fff ${data}%   , #fff  100%)`,
          }}
          className="max-w-screen-md bg-white rounded-3xl pb-1 font-bold text-white items-center flex-nowrap h-12 mx-auto lg:w-9/12 text-xl lg:text-3xl grid place-content-center "
        >
          {data < 50 ? "Sour" : "Sweet"}
        </div>
        <div className=" grid place-content-center gap-2">
          <img src={emoji1} alt="" className="py-10 " />
        </div>
        <div className="grid place-content-center ">
          <div className=" bg-green text-white pt-4 pb-2 px-16  flex flex-nowrap gap-2 items-center justify-center font-epilogue rounded-2xl">
            <h1 className=" lg:text-3xl text-xl min-w-full">
              Financial Wellness Score
            </h1>
            <span className="lg:text-4xl text-2xl  font-bold ">{data}</span>
          </div>
          <div className=" font-epilogue grid place-content-center gap-4 mt-8 text-center max-w-screen-md mx-auto">
            <h1 className=" lg:text-3xl text-xl px-4 font-semibold">
              Sweet, sour and minty! Just as you like it!
            </h1>
            <span className=" lg:text-xl text-lg min-w-full px-3 lg:leading-9">
              You are on the right track. Financially healthy folks are
              successfully managing all aspects of their financial life. They
              have good to excellent credit, a manageable debt, an emergency
              savings fund and are on the right track for retirement. The goal
              for you is staying the course and reaching your financial goals.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ReportDetail;
