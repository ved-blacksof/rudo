import React from "react";
import "./index.css";
import la1 from "../../../assets/homepage/launching_soon/la1.png";
import la2 from "../../../assets/homepage/launching_soon/la2.png";
import la3 from "../../../assets/homepage/launching_soon/la3.png";
import la4 from "../../../assets/homepage/launching_soon/la4.png";
import Vector from "../../../assets/homepage/launching_soon/Vector.svg";
import Vector1 from "../../../assets/homepage/launching_soon/Vector1.svg";
import Vector2 from "../../../assets/homepage/launching_soon/Vector2.svg";

const LaunchingSoon = ({ openModel, hrefId }) => {
  return (
    <div className="main_launchSoon" id={hrefId}>
      <div className="launch_flex">
        <img className="flex_image1" src={la4} alt="la4" />
        <img className="flex_image2" src={la3} alt="la3" />
      </div>

      <div className="lunch_center">
        <div className="lunch_vector">
          <img src={Vector} className="lunch_vector_img" alt="img" />
          <img src={Vector1} className="lunch_vector_img1" alt="img" />
          <h1 className=" font-vanio-bold">Launching Soon!</h1>
          <img className="lunch_vector_img2" src={Vector2} alt="img" />
        </div>

        <h2 className=" font-epilogue">
          First 1000 RuDo members will get 12 months subscription and 50%
          lifetime discount thereon*
        </h2>
        {/*<Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={openModel} />*/}
        <div data-vl-widget="popupTrigger"></div>
      </div>

      <div className="launch_flex1">
        <img className="flex_image3" src={la2} alt="la2" />
        <img className="flex_image4" src={la1} alt="la1" />
      </div>
    </div>
  );
};

export default LaunchingSoon;
