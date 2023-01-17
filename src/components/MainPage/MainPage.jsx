import React from "react";
import Footer from "../footer/Footer";
import NavbarCustom from "../navbar/Navbar";
import "../MainPage/MainPage.css";
import Backs from "../storage/backs.jpg";
import Auth from "../Auth/Register";
const MainPage = () => {
  return (
    <>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <Auth />
      <Footer />
    </>
  );
};

export default MainPage;
