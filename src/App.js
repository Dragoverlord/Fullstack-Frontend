import React from "react";
import "./App.css";
import AccountContextProvider from "./context/AccountContext";
import AuthContextProvider from "./context/authContext";
import BalanceContextProvider from "./context/balance";
import ProductContextProvider from "./context/productContext";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <BalanceContextProvider>
        <AccountContextProvider>
          <ProductContextProvider>
            <AuthContextProvider>
              <MainRoutes />
            </AuthContextProvider>
          </ProductContextProvider>
        </AccountContextProvider>
      </BalanceContextProvider>
    </>
  );
};

export default App;
