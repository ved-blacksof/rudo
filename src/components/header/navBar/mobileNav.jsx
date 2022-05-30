import { Link } from "react-router-dom";

const MobileModal = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "h-96" : "h-0"
      } transition-all duration-300 ease-in-out md:hidden  overflow-hidden absolute left-0 right-0  bg-white top-full grid place-content-center gap-8 z-[10000]`}
    >
      <div className="  grid place-content-center place-items-center gap-4 flex-nowrap px-2 ">
        <Link
          to="/blogs"
          className="text-gray hover:text-dark py-2 px-4 text-xl font-bold font-epilogue tracking-wide "
        >
          Blogs
        </Link>
        <Link
          to="/wellness-test"
          className=" text-darkGreen  bg-green bg-opacity-20 hover:bg-green text-xl border-2 border-green font-epilogue font-normal pt-2 pb-1  px-4 rounded-full hover:text-white leading-7 grid place-content-center transition-colors duration-300"
        >
          # Financial Wellness test
        </Link>
      </div>
    </div>
  );
};
export default MobileModal;
