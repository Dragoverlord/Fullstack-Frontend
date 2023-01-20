import { Box } from "@mui/system";
import React from "react";
import Footer from "../footer/Footer";
import NavbarCustom from "../navbar/Navbar";
import "../MainPage/MainPage.css";
import Backs from "../storage/backs.jpg";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import "./Profile.css";

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
          width: "94%",
          height: "100%",
          display: "flex",
          margin: "0 40px",
          flexWrap: "wrap",
        }}
      >
        <Box className="profile-info" sx={{ margin: "80px 40px" }}>
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
              height: "80%",
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
                  margin: "0 20px",
                }}
                title="US"
              />
              <ReactCountryFlag
                className="emojiFlag"
                countryCode="US"
                style={{
                  fontSize: "6em",
                  lineHeight: "2em",
                  margin: "0 20px",
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
            <Box sx={{ flexGrow: 0 }} />
            <Link to="/">
              <Button
                sx={{
                  color: "white",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                replenishment balance
              </Button>
            </Link>
          </Box>
        </Box>
        <Box
          className="profile-info"
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "54%",
            height: "1100px",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            padding: "0 40px",
            margin: "200px 40px",
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
              style={{
                color: "white",
                margin: "20px auto",
                fontFamily: "sans-serif",
              }}
            />
            <TextField
              label="Username"
              fullWidth
              variant="filled"
              sx={{
                m: 1,
                bgcolor: "white",
                color: "black",
                margin: "20px auto",
                borderRadius: "10px",
              }}
              name="username"
            />
            <TextField
              label="Contry"
              fullWidth
              variant="filled"
              sx={{
                m: 1,
                bgcolor: "white",
                color: "black",
                margin: "20px auto",
                borderRadius: "10px",
              }}
              name="Contry"
            />
            <Button
              sx={{
                m: 1,
                bgcolor: "darkred",
                color: "white",
                margin: "20px auto",
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
