import React from "react";
import "./App.css";
import AuthContextProvider from "./context/authContext";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <MainRoutes />
      </AuthContextProvider>
    </>
  );
};

export default App;
