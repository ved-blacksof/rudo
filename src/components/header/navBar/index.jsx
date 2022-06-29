import { Link } from "react-router-dom";
import logoIcon from "../../../assets/icons/logo.svg";
import { useEffect, useReducer, useState } from "react";
import MobileModal from "./mobileNav";
import "./index.css";
const Nav = () => {
  const [isModalOpen, toggleModal] = useReducer((s) => !s, false);
  const [scrolled, setScrolled] = useState(false);
  const [joinWaitlist, setJoinWaitlist] = useState(false);


  const BurgerBtn = () => {
    return (
      <button onClick={toggleModal} className="flex md:hidden">
        {isModalOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#E75553"
            height="32"
            width="32"
          >
            <g data-name="Layer 2">
              <g data-name="close">
                <rect
                  width="24"
                  height="24"
                  opacity="0"
                  transform="rotate(180 12 12)"
                />
                <path
                  fill="#E75553"
                  d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"
                />
              </g>
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#E75553"
            viewBox="0 0 92 92"
          >
            <path d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z" />
          </svg>
        )}
      </button>
    );
  };

  const offset = 0;

  const handleScroll = () => {
    const currOffest = window.pageYOffset;
    const currwidth = window.innerWidth;

    if (currOffest > 50) {
      setScrolled(true);
    }
    // if (currOffest > 50 && currwidth <= 600) {
    //   setScrolled(true)
    //   console.log("mb")
    // }
    else {
      setScrolled(false);
    }
  };

  const JoinWaitlist = () => {
    if (joinWaitlist) {
      setJoinWaitlist(false)
    }
    else setJoinWaitlist(true)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${scrolled ? "bg-white shadow" : "bg-transparent"
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
        {/* <BurgerBtn /> */}
        <button onClick={JoinWaitlist} className=" btn sm:block hidden pt-3 pb-2 px-6 text-lg xl:text-xl text-white font-epilogue bg-red rounded-full hover:bg-darkRed transition-colors duration-300 cursor-pointer ">
          Join The Waitlist
        </button>
      </nav>
      {/* <MobileModal isOpen={isModalOpen} /> */}
      <div className={`  ${joinWaitlist ? "fixed top-0 left-0 right-2 flex justify-center items-center w-screen h-screen z-10 bg-slate-600 bg-opacity-50" : "hidden"}`}>
        <div className="viral-loops-formss relative p-8 ">
          <p className="absolute top-3 right-3 scale-x-125 block font-bold cursor-pointer hover:text-red" onClick={JoinWaitlist}>X</p>
          {/* VIRAL Loops */}
          <div data-vl-widget="embedForm"></div>
        </div>
      </div>
    </header>
  );
};
export default Nav;
