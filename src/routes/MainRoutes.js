import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/HomePage/HomePage';

const MainRoutes = () => {
    const PUBLIC_ROUTES = [
      {
        link: "/",
        element: <HomePage />,
        id: 1,
      },
    //   {
    //     link: "*",
    //     element: <NotFoundPage />,
    //     id: 2,
    //   },
    ];
  
    const PRIVATE_ROUTES = [
    ];
  
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