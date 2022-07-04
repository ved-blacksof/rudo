import React from "react";

import { useFormContext } from "../../context";

import LandingScreen from "./landing";

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
      {stage === 1 && <QuestionsScreen />}
      {stage === 2 && <EmailFormScreen />}
      {stage === 3 && <Congratulations />}
      {stage === 4 && <ReportScreen />}
      {stage === 5 && <ReportDeatilScreen />}
    </div>
  );
};
export default FormScreen;
