import FormProgress from "./formProgress";
import FormHeader from "./formHeader";
// import trophy  WithBg from "./svgs/trophyWithBg";
const EmailFormScreen = () => {
  return (
    <>
      <FormHeader />
      <div
        style={{
          minHeight: "calc(100vh - 64px)",
        }}
        className="flex flex-col bg-formBg relative "
      >
        <div className=" d py-2 xl:py-6 ">
          <h3>Almost there!</h3>
          <h1>Submit your Name and Email for the result and to get</h1>
          <div className="flex flex-nowrap items-center justify-center gap-2 ">
            {/* <img src={trophyWithBg} alt="" /> */}
            <h1>1 year free subscription</h1>
          </div>
        </div>
      </div>
      <FormProgress />
    </>
  );
};
export default EmailFormScreen;
