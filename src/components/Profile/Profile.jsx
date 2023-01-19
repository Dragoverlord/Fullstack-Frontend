import { Box } from "@mui/system";
import React from "react";
import Footer from "../footer/Footer";
import NavbarCustom from "../navbar/Navbar";
import "../MainPage/MainPage.css";
import Backs from "../storage/backs.jpg";
import { Avatar, Typography } from "@mui/material";

const Profile = () => {
  return (
    <Box>
      <div>
        <img id="backs" src={Backs} alt="" />
      </div>
      <NavbarCustom />
      <Box
        sx={{
          color: "white",
          width: "90%",
          height: "100%",
          display: "flex",
          margin: "0 40px",
        }}
      >
        <Box sx={{ margin: "80px 40px" }}>
          <Avatar
            sx={{ width: "400px", height: "400px", margin: "40px" }}
            alt="Remy Sharp"
            src="https://cdn.mos.cms.futurecdn.net/eVyt9jnUrLBSvSwW6pScj9.jpg"
          />
          <Box
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "500px",
              height: "600px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-around",
              padding: "0 40px",
            }}
          >
            <Box>
              <Typography variant="h3">UserName</Typography>
              <Typography textAlign="start" variant="h5">
                DragOverlord
              </Typography>
            </Box>
            <br />
            <Box>
              <Typography variant="h3">Email</Typography>
              <Typography textAlign="start" variant="h5">
                Dragoverlord@mail.ru
              </Typography>
            </Box>
            <br />
            <Box>
              <Typography variant="h3">Balance</Typography>
              <Typography textAlign="start" variant="h5">
                5000$
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "1000px",
            height: "1400px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-around",
            padding: "0 40px",
            margin: "80px 40px",
          }}
        >
          <Box></Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Profile;
