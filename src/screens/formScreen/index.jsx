import { useFormContext } from "../../context";

import LandingScreen from "./landing";
import SubLandingScreen from "./subLanding";
import QuestionsScreen from "./questions";
import EmailFormScreen from "./emailForm";
import Congratulations from "./congratulations";
import ReportScreen from "./reportScreen";
import ReportDeatilScreen from "./reportDetail";

const FormScreen = () => {
  const { stage } = useFormContext();
  return (
    <div>
      {stage === 0 && <LandingScreen />}
      {stage === 1 && <SubLandingScreen />}
      {stage === 2 && <QuestionsScreen />}
      {stage === 3 && <EmailFormScreen />}
      {stage === 4 && <Congratulations />}
      {stage === 5 && <ReportScreen />}
      {stage === 6 && <ReportDeatilScreen />}
    </div>
  );
};
export default FormScreen;
