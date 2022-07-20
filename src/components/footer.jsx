import React from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/icons/logo.svg";
import twitter from "../assets/social/twitter.svg";
import instagram from "../assets/social/insta.svg";
import linkedin from "../assets/social/linkedin.svg";
import fb from "../assets/social/facebook.svg";
import PrivacyScreen from "../screens/privacyScreen";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import './footer.css';

const Footer = () => {

  const [modal, setModal] = useState(false);

  return (
    <footer className=" bg-footerBg  flex justify-center ">
      <div className="px-3 flex items-center justify-center flex-nowrap flex-col text-center lg:w-11/12 gap-6 py-14 sm:py-16 sm:mb-0 mb-7">
        <Link to="/">
          <img
            src={logoIcon}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-10 sm:h-auto"
          />
        </Link>
        {/* <div className="grid place-content-center place-items-center gap-1 md:hidden">
          <Link to="/wellness-test">
            <span className="text-darkGreen text-sm">
              #Financial Wellness Test
            </span>
          </Link>
          <Link to="/blogs">
            <span className="text-dark text-sm hover:underline ">Blog</span>
          </Link>
        </div> */}
        <div className="flex flex-none gap-6 items-center justify-center px-3 sm:mt-10">
          <a
            href="https://twitter.com/RudoWealth"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="" className="sm:h-5 h-4" />
          </a>
          <a
            href="https://www.instagram.com/rudowealth/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="" className="sm:h-5 h-4" />
          </a>
          <a
            href="https://www.facebook.com/RuDoWealth"
            rel="noreferrer"
            target="_blank"
          >
            <img src={fb} alt="" className="sm:h-5 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/company/rudo-wealth-financial-services-and-investment"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="" className="sm:h-5 h-4" />
          </a>
        </div>

        <a href="privacy-policy.html" className="text-[9px] sm:text-base font-epilogue mt-5">Privacy Policy</a>
        {/* <Link to="/privacy-policy" className="text-[9px] sm:text-base font-epilogue mt-5">Privacy Policy</Link> */}
        {/* <h3 className="text-[9px] sm:text-base font-epilogue cursor-pointer" onClick={() => modal ? setModal(false) : setModal(true)}>Privacy Policy</h3> */}

        <div className="font-epilogue text-dark min-w-full flex flex-wrap max-w-3xl text-center  gap-1 items-center justify-center">
          <h3 className="text-[9px] sm:text-base">Copyright &copy; 2022.</h3>
          <h3 className="text-[9px] sm:text-base">RuDo Digital Wealth Pvt Ltd.</h3>
          <h3 className="text-[9px] sm:text-base">All rights reserved.</h3>
        </div>
      </div>

      {/* <div className={`${modal && "show-policy"} hide-policy w-screen h-screen fixed top-0 left-0 overflow-y-scroll bg-white z-[99]`}>
        <PrivacyScreen />
        <ImCross
          className="absolute sm:top-14 top-5 sm:right-24 right-5 block font-bold cursor-pointer hover:text-black text-red"
          onClick={() => modal ? setModal(false) : setModal(true)}
        />
      </div> */}
    </footer>
  );
};

export default Footer;