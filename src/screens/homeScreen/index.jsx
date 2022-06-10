import Banner from "./banner";
import StepIntoFuture from "./stepIntoFuture";
import CardStack from "./cardStack";
import HomeCardAnim from "./homeCardAnim";
import LaunchingSoon from "./launchingSoon";
import FooterBlade from "./subFooter";
import Banner2 from "./banner2";

const HomePage = () => {
  return (
    <>
      <Banner />
      {/* <Banner2 /> */}
      <StepIntoFuture />
      <CardStack />
      <HomeCardAnim />
      <LaunchingSoon />
      <FooterBlade />
    </>
  );
};

export default HomePage;
