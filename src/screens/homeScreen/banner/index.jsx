import ReactPlayer from "react-player";

const Banner = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("this is form submit handler ");
  };
  return (
    <section className=" bg-cream">
      <div className="px-3 md:w-11/12 mx-auto flex items-center justify-around gap-y-10 gap-x-4 lg:flex-row flex-col min-h-[45rem]  py-16 bg-cream">
        <div className=" grow-[3] shrink flex flex-col gap-4  justify-center max-w-screen-lg  lg:px-3 ">
          <h1 className=" text-3xl md:text-4xl xl:text-5xl font-epilogue font-bold md:leading-relaxed xl:leading-snug">
            Got Spare Change? <br />
            Let&apos;s grow it{" "}
            <span className=" text-red "> automatically!</span>
          </h1>
          <div className=" text-gray text-xl md:text-2xl xl:text-3xl font-epilogue max-w-screen-md  ">
            Start small but steady! With RuDo, build a Global ETF portfolio and
            let us grow your spare change into a million bucks in a fun and
            rewarding way.
          </div>
          <form
            onSubmit={handleSubmit}
            className=" font-epilogue flex items-center justify-center gap-4 md:flex-row flex-col bg-orange bg-opacity-10 py-4 px-6  rounded-lg my-4  max-w-screen-sm  "
          >
            <input
              type="text"
              size="3"
              placeholder="Name"
              className="px-4 pt-2 pb-1 font-epilogue text-gray md:text-lg shadow-inputShadow outline-none rounded-md flex-1  w-full"
            />
            <input
              type="text"
              placeholder="Email Address"
              size="3"
              className="px-4 pt-2 pb-1 font-epilogue text-gray md:ext-lg shadow-inputShadow outline-none rounded-md flex-1 w-full"
            />
            <button
              type="submit"
              className="bg-red hover:outline-red  outline  outline-offset-2 outline-2 font-epilogue text-lg text-white font-bold pt-2 pb-1 grid place-content-center px-4 rounded-full min-w-[10rem]"
            >
              Start Today
            </button>
          </form>
        </div>
        <div className="grow-[2] shrink hidden place-content-center xl:grid basis-96 ">
          <ReactPlayer
            url="https://youtu.be/fE-2h3stIhw"
            muted={true}
            loop={true}
            playing={true}
            controls={true}
            height={480}
            width={480}
          />
        </div>
        <div className=" grow-[2]  shrink  place-content-center grid xl:hidden shrink-1 basis-96">
          <ReactPlayer
            url="https://youtu.be/fE-2h3stIhw"
            muted={true}
            loop={true}
            playing={true}
            controls={true}
            height={330}
            width={330}
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
