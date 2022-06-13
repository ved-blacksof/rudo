import logoIcon from "../../assets/icons/logo.svg";
import chevronLeft from "./svgs/chevronDesktop.svg";
const FormHeader = ({ prevHandler, elemRef }) => {
<<<<<<< HEAD
=======
  // console.log(stage)
>>>>>>> cce52e9198ceac4abbdc8863ed47232fd6879385
  return (
    <header className="shadow-navBar bg-cream  sticky top-0 left-0 right-0 z-[100]">
      <div className=" absolute px-6 place-content-center  h-[3rem] my-[0.5rem] grid  lg:hidden">
        <button onClick={prevHandler} ref={elemRef}>
          <img src={chevronLeft} alt="arrow-left" />
        </button>
      </div>
      <nav className=" h-[4rem] py-2 px-3 lg:w-11/12 mx-auto grid place-content-center  ">
        <img src={logoIcon} alt="" loading="eager" className=" h-8 xl:h-12 " />
      </nav>
    </header>
  );
};

export default FormHeader;
