import Banner from "./banner";
import StepIntoFuture from "./stepIntoFuture";
import CardStack from "./cardStack";
import HomeCardAnim from "./homeCardAnim";
import LaunchingSoon from "./launchingSoon";
import FooterBlade from "./subFooter";

const HomePage = () => {
  return (
    <>
      <Banner />
      <StepIntoFuture />
      <CardStack />
      <HomeCardAnim />
      {/* <LaunchingSoon /> */}
      <FooterBlade />
    </>
  );
};

export default HomePage;
