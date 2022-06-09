import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./style.css"

const Banner2 = ({setShowHowItWork}) => {


  return (
    <section className="">
      <div className="px-3 md:w-11/12 mx-auto flex  justify-around gap-y-10 gap-x-4 lg:flex-row  flex-col py-16 ">
        <div className="how-it-works-banner text-white p-8 rounded-lg text-xl ">
          <h1>How it works?  <p className="cursor-pointer hover:scale-125 transition-all" onClick={() => setShowHowItWork(false)}>X</p> </h1>
          <div className="how-works flex justify-around p-5">
            <div className="wrapper">
              <div className="circle text-2xl flex justify-center items-center bg-white">1</div>
              <h4 className="text-lg mt-2">Refer</h4>
            </div>
            <span></span>
            <div className="wrapper">
              <div className="circle text-2xl flex justify-center items-center bg-white">2</div>
              <h4 className="text-lg mt-2">Reach a milestones</h4>
            </div>
            <span></span>
            <div className="wrapper">
              <div className="circle text-2xl flex justify-center items-center bg-white">3</div>
              <h4 className="text-lg mt-2">Get Reward</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
