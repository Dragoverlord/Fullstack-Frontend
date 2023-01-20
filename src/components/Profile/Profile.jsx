import { Box } from "@mui/system";
import React from "react";
import Footer from "../footer/Footer";
import NavbarCustom from "../navbar/Navbar";
import "../MainPage/MainPage.css";
import Backs from "../storage/backs.jpg";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

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
          flexWrap: "wrap"
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
              width: "100%",
              height: "70%",
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
              <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                  width: "6em",
                  height: "6em",
                  margin: "0 20px"
                }}
                title="US"
              />
              <ReactCountryFlag
                className="emojiFlag"
                countryCode="US"
                style={{
                  fontSize: "6em",
                  lineHeight: "2em",
                  margin: "0 20px"
                }}
                aria-label="United States"
              />
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
            width: "60%",
            height: "1100px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "0 40px",
            margin: "80px 40px",
          }}
        >
          <Box
            sx={{
              width: "40vw",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <Typography style={{ color: "white", margin: "50px auto" }}>
              Profile Option
            </Typography>
            <input
              type="file"
              name="Avatar"
              style={{ color: "white", margin: "50px auto" }}
            />
            <TextField
              label="Username"
              fullWidth
              variant="filled"
              sx={{
                m: 1,
                bgcolor: "white",
                color: "black",
                margin: "50px auto",
                borderRadius: "10px",
              }}
              name="username"
            />
            <Button
              sx={{
                m: 1,
                bgcolor: "darkred",
                color: "white",
                margin: "50px auto",
                borderRadius: "10px",
              }}
              variant="outlined"
              fullWidth
              size="large"
            >
              Save option
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Profile;
