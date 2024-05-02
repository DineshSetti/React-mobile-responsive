import React from "react";
import {
  Typography,
  TextField,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import imageSrc from "./images (1).png";
import Google from "./page1Google.png";
import airbnb from "./imageA.jpg";
import facebook from "./Facebppk.png";
import hubspot from "./Hubspot.png";
import slack from "./slack.png";

const FirstHeading = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10vh",
          marginRight: "53px",
        }}
      >
        {!isMobile && (
          <Button
            variant="contained"
            color="success"
            sx={{ borderRadius: "33px" }}
          >
            Save 90%
          </Button>
        )}
        <Button variant="outlined" color="success">
          Get account for $59
        </Button>
      </Box>

      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        style={{
          textAlign: "center",
          marginRight: "50px",
          fontSize: isMobile ? "3rem" : "4rem",
          lineHeight: isMobile ? "1.2" : "1.1",
          marginTop: "2vh",
        }}
      >
        Manage the team <br />
        everyone wants to be on
      </Typography>
      <p style={{ fontSize: "1.3rem", marginTop: "0vh" }}>
        Simple platform that lets you master what great managers do best,
        <br /> as develop trust, collaborate, and drive team performance.
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: isMobile ? "column" : "row",
          width: isMobile ? "100%" : "auto",
        }}
      >
        <TextField
          id="outlined-basic"
          label="name@yourcompany.com"
          variant="outlined"
          sx={{
            height: "53px",
            width: isMobile ? "100%" : "350px",
            marginBottom: isMobile ? "20px" : "0",
            marginRight: isMobile ? "0" : "20px",
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          sx={{
            fontSize: "15px",
            height: "55px",
            width: isMobile ? "100%" : "125px",
            backgroundColor: "purple",
          }}
        >
          Try it free
        </Button>
      </div>
      <br />
      <div
        style={{
          marginTop: "20px",
          textAlign: isMobile ? "center" : "left",
          width: "100%",
        }}
      >
        <img
          src={imageSrc}
          alt="Your Image"
          style={{
            width: isMobile ? "100%" : "60%",
            marginLeft: isMobile ? "auto" : "350px",
            marginRight: isMobile ? "auto" : "0",
          }}
        />
      </div>
      <p
        style={{
          whiteSpace: isMobile ? "nowrap" : "normal",
        }}
      >
        <b>TRUSTED BY OVER 10,000+ WORLD'S BEST TEAMS</b>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : "center",
          width: isMobile ? "100%" : "95%",
          marginTop: 30,
        }}
      >
        <img
          src={Google}
          alt="Google Image"
          style={{ width: "50px", margin: "0 10px" }}
        />
        <img
          src={airbnb}
          alt="airbnb"
          style={{ width: "50px", margin: "0 10px" }}
        />
        <img
          src={facebook}
          alt="facebook Image"
          style={{ width: "50px", margin: "0 10px" }}
        />
        <img
          src={hubspot}
          alt="hubspot"
          style={{ width: "50px", margin: "0 10px" }}
        />
        <img
          src={slack}
          alt="slack Image"
          style={{ width: "50px", margin: "0 10px" }}
        />
      </div>
    </div>
  );
};

export default FirstHeading;
