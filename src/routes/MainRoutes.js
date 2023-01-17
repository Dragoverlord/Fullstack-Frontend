import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "../components/Auth/Auth";
import Contact from "../components/contact/Contact";
import Error from "../components/Error/Error";
import HomePage from "../components/HomePage/HomePage";
import RoomChat from "../components/HomePage/RoomChat";
import MainPage from "../components/MainPage/MainPage";
import Dangerous from "../components/OurRules/Dangerous";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    {
      link: "/dangerous",
      element: <Dangerous />,
      id: 3,
    },
    {
      link: "/auth",
      element: <Auth />,
      id: 4,
    },
    {
      link: "/contact",
      element: <Contact />,
      id: 5,
    },
    {
      link: "/homepage",
      element: <HomePage />,
      id: 6,
    },
    {
      link: "*",
      element: <Error />,
      id: 7,
    },
  ];

  const PRIVATE_ROUTES = [];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
