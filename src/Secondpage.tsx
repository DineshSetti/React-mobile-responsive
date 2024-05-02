import React from "react";
import {
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import sampleImage from "./images (2).png";

const SecondPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {!isMobile && (
        <img
          src={sampleImage}
          alt="Sample"
          style={{
            width: "35%",
            marginTop: "10vh",
            marginLeft: "21%",
            marginRight: "5%",
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: isMobile ? "100%" : "50%",
          marginTop: "10vh",
          marginRight: isMobile ? "0" : "18%",
        }}
      >
        <div style={{ maxWidth: "100%" }}>
          <Card sx={{ margin: "10px auto", width: "100%" }}>
            <CardContent>
              <Typography
                variant="h1"
                sx={{ fontSize: isMobile ? "1.5rem" : "1.5rem" }}
              >
                Survey your team
              </Typography>
              <Typography variant="body1">
                Powerful questions that get to the heart <br />
                of how team members really feel.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px auto", width: "100%" }}>
            <CardContent>
              <Typography
                variant="h1"
                sx={{ fontSize: isMobile ? "1.5rem" : "1.5rem" }}
              >
                Resolve issues quickly
              </Typography>
              <Typography variant="body1">
                Anonymous messaging that connects <br /> managers and employees.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px auto", width: "100%" }}>
            <CardContent>
              <Typography
                variant="h1"
                sx={{ fontSize: isMobile ? "1.5rem" : "1.5rem" }}
              >
                Plan your 1-on-1s
              </Typography>
              <Typography variant="body1">
                Plan meetings together and give a stake <br />
                employees and teams
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ margin: "10px auto 20px auto", width: "100%" }}>
            <CardContent>
              <Typography
                variant="h1"
                sx={{ fontSize: isMobile ? "1.5rem" : "1.5rem" }}
              >
                Track your progress
              </Typography>
              <Typography variant="body1">
                Easy-to-read reports and sharable <br />
                results help managers and teams
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      {isMobile && (
        <img
          src={sampleImage}
          alt="Sample"
          style={{
            width: "100%",
            marginTop: "10vh",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      )}
    </div>
  );
};

export default SecondPage;
