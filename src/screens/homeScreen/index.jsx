import Banner from "./banner";
import StepIntoFuture from "./stepIntoFuture";
import CardStack from "./cardStack";
import HomeCardAnim from "./homeCardAnim";
import LaunchingSoon from "./launchingSoon";
import CardStackMobile from "./cardStack/mobileView";
import FooterBlade from "./subFooter";
import "./banner/style.css";

const HomePage = () => {
  return (
    <>
      <div className="banner__wrapper">
        <Banner />
        <StepIntoFuture />
      </div>
      <div className="hidden sm:block">
        <CardStack />
      </div>
      <div className="block sm:hidden lg:mt-32 mt-10">
        <CardStackMobile />
      </div>
      <HomeCardAnim />
      {/* <LaunchingSoon /> */}
      <FooterBlade />
    </>
  );
};

export default HomePage;
