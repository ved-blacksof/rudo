import { Link } from "react-router-dom";
import logoIcon from "../../../assets/icons/logo.svg";
import { useEffect, useReducer, useState } from "react";
import MobileModal from "./mobileNav";
import "./index.css";
const Nav = () => {
  const [isModalOpen, toggleModal] = useReducer((s) => !s, false);
  const [scrolled, setScrolled] = useState(false);

  const BurgerBtn = () => {
    return (
      <button onClick={toggleModal} className="flex md:hidden">
        <label htmlFor="check" className="flex md:hidden">
          <input type="checkbox" id="check" />
          <span className="bg-red"></span>
          <span className="bg-red"></span>
          <span className="bg-red"></span>
        </label>
      </button>
    );
  };

  const offset = 0;

  const handleScroll = () => {
    const currOffest = window.pageYOffset;
    const currwidth = window.innerWidth;

    if (currOffest > 50) {
      setScrolled(true);
      console.log("ds");
    }
    // if (currOffest > 50 && currwidth <= 600) {
    //   setScrolled(true)
    //   console.log("mb")
    // }
    else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` ${
        scrolled ? "bg-white shadow" : "bg-transparent"
      } transition header sticky top-0 left-0 right-0 z-[10]`}
    >
      <nav className=" h-[4.5rem] py-2 px-3 lg:w-11/12 mx-auto  flex flex-nowrap items-center justify-between gap-y-10 gap-x-6  ">
        <Link to="/">
          <img src={logoIcon} alt="" loading="eager" className="h-9 sm:h-12" />
        </Link>
        {/* <div className="hidden md:flex items-center justify-center gap-4 flex-nowrap px-2 ">
          <Link
            to="/blogs"
            className="text-gray hover:text-dark py-2 px-4 text-xl font-bold font-epilogue tracking-wide "
          >
            Blogs
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="/wellness-test"
            className=" text-white   bg-green bg-opacity-20 hover:bg-green text-xl border-2 border-green font-epilogue font-normal pt-2 pb-1  px-4 rounded-full hover:text-white leading-7 grid place-content-center transition-colors duration-300"
          >
            # Financial Wellness test
          </Link>
        </div> */}
        <BurgerBtn />
      </nav>
      <MobileModal isOpen={isModalOpen} />
    </header>
  );
};
export default Nav;
