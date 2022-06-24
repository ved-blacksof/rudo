import { BrowserRouter, useRoutes } from "react-router-dom";
import { useState, useEffect } from "react";
import routes from "./routes";

const RenderRoutes = () => {
  let routeTree = useRoutes(routes());
  return routeTree;
};

const App = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <div class="h-screen w-screen grid place-content-center ">
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
          stroke-width="10"
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
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  );
};

export default App;
