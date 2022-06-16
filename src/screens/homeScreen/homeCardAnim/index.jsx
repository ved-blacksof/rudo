import React from "react";
import "./index.css";
import feature1 from "../../../assets/homepage/cardAnim/feature1.png";
import feature2 from "../../../assets/homepage/cardAnim/feature2.png";
import feature3 from "../../../assets/homepage/cardAnim/feature3.png";
import feature4 from "../../../assets/homepage/cardAnim/featurebg1.png";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

const CardStack = () => {
  return (
    <div className="Home_container  md:w-11/12 mt-16 mb-32 px-3  mx-auto ">
      <div className="feature-section mx-auto">
        <img src={feature4} className="top-bg" alt="img4" />
        <img src={feature4} className="bottom-bg" alt="img4" />
        <div className="row">
          <div className="col-12">
            <div className="feature-wrapper">
              <div className="feature-card card-one">
                <ul className="p-0">
                  <li>
                    <h4 className="font-vanio-light">
                      Keep that change. <br /> No, literally!
                    </h4>
                    <span className="arrow-vertical" style={{ left: "120px" }}>
                      ↑
                    </span>
                    <p className="font-epilogue">As they say, “starting small helps you gain big”</p>
                    <img src={feature1} className="img-fluid" alt="img" />
                  </li>
                </ul>
              </div>
              <div className="feature-card card-two">
                <ul className="p-0">
                  <li>
                    <h4 className="font-vanio-light">Invest Smart!</h4>
                    <span className="arrow-vertical" style={{ left: "80px" }}>
                      ↑
                    </span>
                    <p className="font-epilogue">
                      Your money, our brains! Choose a portfolio strategy
                      tailored just for you!
                    </p>
                    <img src={feature2} className="img-fluid" alt="img1" />
                  </li>
                </ul>
              </div>
              <div className="feature-card card-three">
                <ul className="p-0">
                  <li>
                    <h4 className="font-vanio-light">
                      Salary Credited! <br />
                      Salary Debited!
                    </h4>
                    <span className="arrow-vertical" style={{ left: "120px" }}>
                      ↑
                    </span>
                    <p className="font-epilogue">
                      That was fast! Wondering what happened to all that money?
                    </p>
                    <img src={feature3} className="img-fluid" alt="img2" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home_card_slider">
        <Splide
          options={{
            height: "50vh",
            rewind: true,
            wheel: true,
            pagination: true,
            arrows: false,
            autoplay: "playing",
          }}
        >
          <SplideSlide data-splide-interval="3000">
            <div
              className="home_card_slider_inner"
              style={{ backgroundColor: "#FDE4B6" }}
            >
              <h4 className="font-vanio-light">Keep that change. No, literally! </h4>
              <p className="font-epilogue">As they say, “starting small helps you gain big”</p>
              <img src={feature1} className="img-fluid" alt="img" />
            </div>
          </SplideSlide>

          <SplideSlide data-splide-interval="3000">
            <div
              className="home_card_slider_inner"
              style={{ backgroundColor: "#F17E7E" }}
            >
              <h4 className="font-vanio-light">Invest Smart!</h4>
              <p className="font-epilogue">
                Your money, our brains! Choose a portfolio strategy tailored
                just for you!
              </p>
              <img src={feature2} className="img-fluid" alt="img1" />
            </div>
          </SplideSlide>

          <SplideSlide data-splide-interval="3000">
            <div
              className="home_card_slider_inner"
              style={{ backgroundColor: "#7CC8C2" }}
            >
              <h4 className="font-vanio-light">
                Salary Credited! <br />
                Salary Debited!
              </h4>

              <p className="font-epilogue">That was fast! Wondering what happened to all that money?</p>
              <img src={feature3} className="img-fluid" alt="img2" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default CardStack;
