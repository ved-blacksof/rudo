import Banner from "./banner";
import StepIntoFuture from "./stepIntoFuture";
import CardStack from "./cardStack";
import HomeCardAnim from "./homeCardAnim";
import LaunchingSoon from "./launchingSoon";
import FooterBlade from "./subFooter";
import './banner/style.css'

const HomePage = () => {
  return (
    <>
      <div className="banner__wrapper">
        <Banner />
        <StepIntoFuture />
      </div>
      <CardStack />
      <HomeCardAnim />
      {/* <LaunchingSoon /> */}
      <FooterBlade />
    </>
  );
};

export default HomePage;
