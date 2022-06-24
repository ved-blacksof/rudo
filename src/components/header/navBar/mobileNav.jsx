import { Link } from "react-router-dom";

const MobileModal = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "h-screen" : "h-0"
      } transition-all duration-300 ease-in-out md:hidden  overflow-hidden absolute left-0 right-0 bg-white top-full grid gap-8 z-[10000]`}
    >
      <div className="divide-y-2 divide-[#EFBE97] divide-opacity-25  gap-2 flex-nowrap px-4  py-5">
        <div className="py-2 ">
          <Link
            to="/blogs"
            className="text-gray hover:text-dark py-4 leading-10 px-4 text-xl font-bold font-epilogue tracking-wide  mr-auto"
          >
            Blogs
          </Link>
        </div>
        <div>
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
