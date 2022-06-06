import { Link } from "react-router-dom";
const ErrorScreen = () => {
  return (
    <div className=" grid place-content-center min-h-screen gap-4 ">
      <h1 className="text-4xl xl:text-5xl font-bold text-red">
        404 : Page Not Found.
      </h1>
      <Link
        to="/"
        className=" py-3 hover:bg-red hover:bg-opacity-40 px-5 bg-red bg-opacity-30 rounded-md text-lg lg:text-3xl  font-bold  mx-auto  text-red mt-10  "
      >
        Return To Homepage
      </Link>
    </div>
  );
};

export default ErrorScreen;
