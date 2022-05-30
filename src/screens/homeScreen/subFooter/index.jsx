import React from "react";
import "./index.css";

const FooterBlade = ({ openModel }) => {
  return (
    <div className="main_footerBlade">
      <div className="footerBlade_flex">
        <h2 className=" font-vanio-light">
          Changing the World's Outlook
          <br className="br_hide" />
          Towards Saving and Investing.
        </h2>
        <p className="font-epilogue">
          Cuz this time it's
          <br />
          Fun, Rewarding, and Simple.
        </p>
        {/* <Button color={"#e75553"} lable={"Sign Up Now"} handleOpen={openModel} /> */}
        {/* <div data-vl-widget="popupTrigger"></div>*/}
      </div>
    </div>
  );
};

export default FooterBlade;
