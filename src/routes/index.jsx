import React from "react";
import { Outlet } from "react-router-dom";
import { HomeScreen, ErrorScreen, FormScreen, PrivacyScreen } from "../screens";
import { Ribbon, NavBar, Footer } from "../components";
import ContextProvider from "../context";
import Blogs from "../screens/blogs";

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
      path: "/privacy-policy",
      element: <ViewWithNavAndFooter />,
      children: [{ path: "", element: <PrivacyScreen /> }],
    },
    {
      path: "/blogs",
      element: <ViewWithNavAndFooter />,
      children: [{ path: "", element: <Blogs /> }],
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
