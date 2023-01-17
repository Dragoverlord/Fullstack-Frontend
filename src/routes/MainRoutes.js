import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Contact from "../components/contact/Contact";
import Error from "../components/Error/Error";
import HomePage from "../components/HomePage/HomePage";
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
      element: <Register />,
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
      link: "/login",
      element: <Login />,
      id: 7,
    },
    {
      link: "*",
      element: <Error />,
      id: 8,
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
