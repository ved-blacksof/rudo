import { Outlet } from "react-router-dom";
import { HomeScreen, ErrorScreen, FormScreen } from "../screens";
import { Ribbon, NavBar, Footer } from "../components";
import ContextProvider from "../context";

const ViewWithNavAndFooter = () => {
  return (
    <>
      <Ribbon />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const routeTree = () => {
  return [
    {
      path: "/",
      element: <ViewWithNavAndFooter />,
      children: [{ path: "", element: <HomeScreen /> }],
    },
    {
      path: "/wellness-test",
      element: (
        <ContextProvider>
          <FormScreen />
        </ContextProvider>
      ),
    },
    {
      path: "*",
      element: <ErrorScreen />,
    },
  ];
};
export default routeTree;
