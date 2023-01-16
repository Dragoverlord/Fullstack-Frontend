import React from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavbarCustom from "./components/navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      <NavbarCustom />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
