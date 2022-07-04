import React,{ useState } from "react";
import "./style.css"

const BottomJoinBtn = ({ id }) => {
  const [signupForm, setSignupForm] = useState(false);

  const handleClick = () => {
    if (signupForm) {
      setSignupForm(false);
    }
    else {
      setSignupForm(true);
    }
  }
  return (
    <div>
      <button className="bottomJoinBtn font-epilogue text-white font-bold text-xl"
        onClick={`#${id}`}
      // onClick={handleClick}
      >Join the waitlist get AED50</button>

      {/* <div className={`${signupForm ? "signupForm bg-white rounded-t-3xl overflow-hidden" : "hide"}`}>
        <p className="absolute top-0 right-5 text-2xl" onClick={handleClick}>x</p>
        <div data-vl-widget="embedForm"></div>
      </div> */}
    </div>
  );
};

export default BottomJoinBtn;
