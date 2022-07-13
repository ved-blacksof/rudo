import React from "react";
import { Outlet } from "react-router-dom";
import { HomeScreen, ErrorScreen, FormScreen, PrivacyScreen } from "../screens";
import { Ribbon, NavBar, Footer } from "../components";
import ContextProvider from "../context";

const ViewWithNavAndFooter = () => {
  return (
    <>
      {/* <Ribbon /> */}
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
      path: "/privacypolicy",
      element: <ViewWithNavAndFooter />,
      children: [{ path: "/privacypolicy", element: <PrivacyScreen /> }],
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
