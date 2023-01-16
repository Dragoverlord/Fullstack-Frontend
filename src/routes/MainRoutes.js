import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../components/Error/Error";
import HomePage from "../components/HomePage/HomePage";
import MainPage from "../components/MainPage/MainPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <MainPage />,
      id: 1,
    },
    {
      link: "*",
      element: <Error />,
      id: 2,
    },
    {
      link: "/rules",
      element: <HomePage />,
      id: 3,
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
