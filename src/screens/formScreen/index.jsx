import { useFormContext } from "../../context";

import LandingScreen from "./landing";
import SubLandingScreen from "./subLanding";
import QuestionsScreen from "./questions";
import EmailFormScreen from "./emailForm";

const FormScreen = () => {
  const { stage } = useFormContext();
  return (
    <div>
      {stage === 0 && <LandingScreen />}
      {stage === 1 && <SubLandingScreen />}
      {stage === 2 && <QuestionsScreen />}
      {stage === 3 && <EmailFormScreen />}
    </div>
  );
};
export default FormScreen;
