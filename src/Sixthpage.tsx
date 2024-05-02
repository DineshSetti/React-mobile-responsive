import React from "react";
import {
  Box,
  Typography,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import image1 from "./playstore-black.png";
import image2 from "./app store black.png";

const Sixthpage = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#0B1945",
          padding: "50px",
          color: "white",
          flexDirection: "row",
          display: "flex",
          gap: "10rem",
          marginTop: "14vh",
          "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: "1rem",
            padding: "20px",
          },
        }}
      >
        <AccordionSection title="Company">
          <Typography variant="h6">About Us</Typography>
          <Typography variant="h6">Blog</Typography>
          <Typography variant="h6">Careers</Typography>
          <Typography variant="h6">Contact Us</Typography>
        </AccordionSection>

        <AccordionSection title="Support">
          <Typography variant="h6">Help Center</Typography>
          <Typography variant="h6">Safety Center</Typography>
          <Typography variant="h6">Community</Typography>
        </AccordionSection>

        <AccordionSection title="Legal">
          <Typography variant="h6">Cookies Policy</Typography>
          <Typography variant="h6">Privacy Policy</Typography>
          <Typography variant="h6">Terms of Service</Typography>
        </AccordionSection>

        <Box
          sx={{
            flex: "1 1 30%",
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            <b>Company</b>
          </Typography>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="h6">Blog</Typography>
          <Typography variant="h6">Careers</Typography>
          <Typography variant="h6">Contact Us</Typography>
        </Box>

        <Box
          sx={{
            flex: "1 1 30%",
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            <b>Support</b>
          </Typography>
          <Typography variant="h6">Help Center</Typography>
          <Typography variant="h6">Safety Center</Typography>
          <Typography variant="h6">Community</Typography>
        </Box>

        <Box
          sx={{
            flex: "1 1 30%",
            "@media (max-width: 768px)": {
              display: "none",
            },
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            <b>Legal</b>
          </Typography>
          <Typography variant="h6">Cookies Policy</Typography>
          <Typography variant="h6">Privacy Policy</Typography>
          <Typography variant="h6">Terms of Service</Typography>
        </Box>

        <Box sx={{ flex: "1 1 30%" }}>
          <Typography variant="h6" sx={{ marginBottom: "1rem" }}>
            <b>Install App</b>
          </Typography>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Link
              href="https://play.google.com/store/games?device=windows"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image1}
                alt="Google Play"
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
            <Link
              href="https://www.apple.com/in/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image2}
                alt="App Store"
                style={{
                  width: "250px",
                  height: "auto",
                  borderRadius: "6px",
                  marginLeft: "-50px",
                }}
              />
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  );
};

const AccordionSection = ({ title, children }) => (
  <Accordion
    sx={{
      "@media (min-width: 768px)": {
        display: "none",
      },
    }}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{ backgroundColor: "#0B1945", color: "white" }}
    >
      <Typography variant="h6">
        <b>{title}</b>
      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ backgroundColor: "#0B1945", color: "white" }}>
      {children}
    </AccordionDetails>
  </Accordion>
);

export default Sixthpage;
