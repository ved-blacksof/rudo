import { Outlet } from "react-router-dom";
import { HomeScreen, ErrorScreen, FormScreen } from "../screens";
import { Ribbon, NavBar, Footer } from "../components";
import ContextProvider from "../context";

const ViewWithNavAndFooter = () => {
  return (
    <>
<<<<<<< HEAD
      <Ribbon />
=======
      {/* <Ribbon /> */}
>>>>>>> cce52e9198ceac4abbdc8863ed47232fd6879385
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
