import React from "react";
import Footer from "../footer/Footer";
import HomePage from "../HomePage/HomePage";
import NavbarCustom from "../navbar/Navbar";
import "../MainPage/MainPage.css"
import Backs from "../storage/backs.jpg"
const MainPage = () => {
  return (
    <>
    <div>
   <img id="backs" src={Backs} alt="" />
    </div>
      <NavbarCustom />
      <HomePage />
      <Footer />
    </>
  );
};

export default MainPage;
