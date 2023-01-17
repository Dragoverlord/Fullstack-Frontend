import { Box } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar(HP)";
import Backs from "../storage/backs.jpg";
import NavbarCustom from "../navbar/Navbar";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <Box sx={{padding: "0px" , margin: "0px"}}>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <Box sx={{ display: "flex" , color: "white" , justifyContent: "space-between" }}>
        <Sidebar />
        <Box sx={{display: "flex" , justifyContent: "flex-end"}}>HomePage</Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
