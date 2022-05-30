import { Link } from "react-router-dom";
import logoIcon from "../assets/social/twitter.png";
import twitter from "../assets/social/twitter.png";
import instagram from "../assets/social/insta.png";
import linkedin from "../assets/social/linkedin.png";
import fb from "../assets/social/facebook.png";

const Footer = () => {
  return (
    <footer className=" bg-footerBg">
      <div className=" px-3 flex items-center justify-center flex-nowrap flex-col text-center lg:w-11/12 gap-6 h-96 ">
        <Link to="/">
          <img src={logoIcon} alt="" loading="lazy" decoding="async" />
        </Link>
        <div className="flex flex-none gap-6 items-center justify-center px-3  mt-10">
          <a href="https://www.blacksof.com/" rel="noreferrer" target="_blank">
            <img src={twitter} alt="" />
          </a>
          <a href="https://www.blacksof.com/" rel="noreferrer" target="_blank">
            <img src={fb} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/rudo-wealth-financial-services-and-investment/about/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=/rudowealth/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="" />
          </a>
        </div>
        <span className="font-epilogue text-dark w-full">
          Copyrights © 2022. RuDo Wealth. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
