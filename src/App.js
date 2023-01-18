import React from "react";
import "./App.css";
import AuthContextProvider from "./context/authContext";
import ProductContextProvider from "./context/productContext";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <MainRoutes />
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
