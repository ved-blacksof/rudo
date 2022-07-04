import React  from "react";
import { Link } from "react-router-dom";

const MobileModal = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "w-screen" : "w-0"
      } transition-all duration-300 ease-in-out md:hidden  overflow-hidden absolute  bottom-0 right-0 top-full  bg-white  grid gap-8 z-[10000] h-screen`}
    >
      <div className="gap-2 flex-nowrap px-4  py-5">
        <div className="py-2 border-b border-[#EFBE97] border-opacity-40">
          <Link
            to="/blogs"
            className="text-gray hover:text-dark py-4 leading-10 px-4 text-xl font-bold font-epilogue tracking-wide  mr-auto"
          >
            Blogs
          </Link>
        </div>
        <div className="border-b border-[#EFBE97] border-opacity-40">
          <Link
            to="/wellness-test"
            className=" text-darkGreen bg-opacity-20  text-2xl font-epilogue font-normal px-4 rounded-full hover:text-white leading-7 grid place-content-start py-5 transition-colors duration-300"
          >
            # Financial Wellness test
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MobileModal;
