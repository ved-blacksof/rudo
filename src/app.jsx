import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import routes from "./routes";
import { ScrollTop } from "./components";

const RenderRoutes = () => {
  let routeTree = useRoutes(routes());
  return routeTree;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollTop>
          <RenderRoutes />
        </ScrollTop>
      </BrowserRouter>
      {isLoading ? (
        <div className=" fixed top-0 left-0 right-0 bottom-0 z-[1000] bg-white h-screen w-screen grid place-content-center ">
          <svg
            style={{
              height: "50px",
              margin: "auto",
              background: "none",
              display: "block",
              shapeRendering: "auto",
            }}
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#e75553"
              strokeWidth="10"
              r="35"
              strokeDasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
          </svg>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
