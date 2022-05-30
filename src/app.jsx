import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";

const RenderRoutes = () => {
  let routeTree = useRoutes(routes());
  return routeTree;
};

const App = () => {
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  );
};

export default App;
